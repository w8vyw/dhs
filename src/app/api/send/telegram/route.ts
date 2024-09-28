import { NextResponse } from 'next/server'

interface ITelegramSuccessResult {
	ok: true
	result: { message_id: number } & Record<string, unknown>
}

// interface ITelegramErrorResult {
// 	ok: false
// 	error_code: number
// 	description: string
// }

export async function POST(request: Request) {
	try {
		const BOT_API_TOKEN = process.env.BOT_API_TOKEN ?? ''
		const CHAT_ID = process.env.CHAT_ID ?? ''
		const DATA = encodeURIComponent((await request.json()) as string)
		const URL = `https://api.telegram.org/bot${BOT_API_TOKEN}/sendMessage?chat_id=${CHAT_ID}&text=${DATA}&parse_mode=HTML`

		const response = await fetch(URL)

		let result: null | Record<string, unknown> | ITelegramSuccessResult = null

		try {
			const json = (await response.json()) as Record<string, unknown>
			result = json
		} catch (error: unknown) {
			if (error instanceof Error) {
				console.error(response)
				throw new Error(
					'FetchError | Response cannot be converted to json (most likely fetch was sent to the wrong place)',
					{ cause: error }
				)
			}
		}

		if (!response.ok) {
			if (typeof result?.error_code === 'undefined' || typeof result.description === 'undefined') {
				console.error('', response, '\nResult', result)
				throw new Error(
					'FetchError | Response not ok and does not match the expected error response json format from api.telegram.org/bot/sendMessage (most likely fetch was sent to the wrong place)'
				)
			}

			throw new Error(`TelegramError | ${String(result.error_code)} - ${String(result.description)}`)
		}

		try {
			const telegramResult: ITelegramSuccessResult = result as unknown as ITelegramSuccessResult

			if (!telegramResult.result.message_id) {
				throw new Error()
			}
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(
					'FetchError | Response not match the expected success response json format from api.telegram.org/bot/sendMessage (most likely fetch was sent to the wrong place)'
				)
			}
		}

		return NextResponse.json('Success', { status: 201 })
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error.message)
			return NextResponse.json(`ServerError: ${error.name === 'Error' ? '' : `${error.name} | `}${error.message}`, {
				status: 500
			})
		}
	}
}
