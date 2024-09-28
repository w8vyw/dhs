import { NextResponse } from 'next/server'

import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: process.env.MAIL_SMTP,
	port: 465,
	secure: true,
	auth: {
		user: process.env.MAIL_FROM,
		pass: process.env.MAIL_PASSWORD
	}
})

interface IData {
	from: string
	subject: string
	text: string
	html: string
}

export async function POST(request: Request) {
	try {
		const { from, subject, text, html } = (await request.json()) as IData

		try {
			await transporter.sendMail({
				from: from,
				to: process.env.MAIL_TO?.split(' '),
				subject: subject,
				text: text,
				html: html
			})
		} catch (error: unknown) {
			if (error instanceof Error) {
				throw new Error(`Nodemailer | ${error.message}`, { cause: error })
			}
		}

		return NextResponse.json('Success', { status: 201 })
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
			return NextResponse.json(`ServerError: ${error.name === 'Error' ? '' : `${error.name} | `}${error.message}`, {
				status: 500
			})
		}
	}
}
