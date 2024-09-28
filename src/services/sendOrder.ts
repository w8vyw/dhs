import type { CartState } from '@/stores/cart'

import type { IOrderFormData } from '@/shared/order-form/types'

export interface IOrderData {
	formData: IOrderFormData
	cart: CartState
}

export async function sendOrder(data: IOrderData) {
	try {
		const { formData, cart } = data

		if (!cart.cart.length) {
			return 'Cart is empty'
		}

		let filteredFormData = Object.entries(formData).filter(([key]) => key !== 'Соглашение')

		if (filteredFormData.find(([key, value]) => key === 'Способ доставки' && value === 'Самовывоз')) {
			const filters = ['Город', 'Улица', 'Дом', 'Этаж', 'Квартира', 'Комментарий']
			filteredFormData = filteredFormData.filter(([key]) => !filters.includes(key))
		}

		const body = JSON.stringify({ formData: Object.fromEntries(filteredFormData), cart: cart })

		const telegramResponse = await fetch('/api/order/telegram', {
			method: 'POST',
			body: body
		})
		const resultTelegramResponse = (await telegramResponse.json()) as string

		if (!telegramResponse.ok) {
			console.warn(resultTelegramResponse)
		}

		const mailResponse = await fetch('/api/order/mail', {
			method: 'POST',
			body: body
		})
		const resultMailResponse = (await mailResponse.json()) as string

		if (!mailResponse.ok) {
			console.warn(resultMailResponse)
		}

		if (!telegramResponse.ok && !mailResponse.ok) {
			throw new Error(`${resultTelegramResponse} | ${resultMailResponse}`)
		}

		return 'Success'
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
			return 'Error'
		}
	}
}
