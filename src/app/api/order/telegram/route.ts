import { NextResponse } from 'next/server'

import { SITE_URL } from '@/constants/seo'

import type { IOrderData } from '@/services/sendOrder'

import type { IOrderFormData } from '@/shared/order-form/types'

const API_URL = process.env.API_URL ?? 'http://localhost:3000/api'

export async function POST(request: Request) {
	try {
		const { formData, cart } = (await request.json()) as IOrderData
		let stringFormData = ''
		let stringCart = ''

		for (const key in formData) {
			const value = String(formData[key as keyof IOrderFormData]).trim()
			stringFormData += `<b>${key}:</b> <code>${value}</code>\n`
		}

		for (const product of cart.cart) {
			if (product.discount) {
				stringCart += `<a href="${SITE_URL}/products/${product.id.split(' ')[0]}">${product.name}</a>\nРазмер: ${product.size}\nКоличество: ${String(product.quantity)} шт\nСкидка: -${String(product.discount.count)}%\nЦена за 1: ${String(product.discount.value)} руб (без скидки: ${String(product.priceOfOne)} руб)\nЦена за ${String(product.quantity)}: ${String(product.priceOfAll)} руб (без скидки: ${String(product.priceOfOne * product.quantity)} руб)\n\n`
			} else {
				stringCart += `<a href="${SITE_URL}/products/${product.id.split(' ')[0]}">${product.name}</a>\n<b>Размер: ${product.size}</b>\n<b>Количество: ${String(product.quantity)} шт</b>\n<b>Цена за 1: ${String(product.priceOfOne)} руб</b>\n<b>Цена за ${String(product.quantity)}: ${String(product.priceOfAll)} руб</b>\n\n`
			}
		}

		const body = JSON.stringify(
			`<b>Заказ c <a href='${SITE_URL}'>сайта</a></b>\n\n` +
				stringFormData +
				`\n<b>Состав заказа:</b>\n\n` +
				'<strong>' +
				stringCart +
				'</strong>' +
				`<b>Итого:\nОбщее количество товаров: ${String(cart.totalQuantity)} шт\nОбщая стоимость заказа: ${String(cart.totalPrice)} руб</b>`
		)

		const response = await fetch(`${API_URL}/send/telegram`, {
			method: 'POST',
			body: body
		})

		const result = (await response.json()) as string

		if (!response.ok) {
			throw new Error(result)
		}

		return NextResponse.json(result, { status: 201 })
	} catch (error: unknown) {
		if (error instanceof Error) {
			console.error(error)
			if (!error.message.includes('ServerError')) {
				console.error(error.message)
				return NextResponse.json(`ServerError: ${error.name === 'Error' ? '' : `${error.name} | `}${error.message}`, {
					status: 500
				})
			} else {
				return NextResponse.json(error.message, { status: 500 })
			}
		}
	}
}
