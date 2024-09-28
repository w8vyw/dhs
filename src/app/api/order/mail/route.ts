import { NextResponse } from 'next/server'

import { SITE_URL } from '@/constants/seo'

import type { IOrderData } from '@/services/sendOrder'

import type { IOrderFormData } from '@/shared/order-form/types'

const API_URL = process.env.API_URL ?? 'http://localhost:3000/api'

export async function POST(request: Request) {
	try {
		const { formData, cart } = (await request.json()) as IOrderData
		const from = 'PRO100МАСЛО'
		const subject = 'Заказ с сайта'
		const text = 'Заказ с сайта'
		let stringFormData = ''
		let stringCart = ''

		for (const key in formData) {
			const value = String(formData[key as keyof IOrderFormData]).trim()
			switch (key) {
				default:
					stringFormData += `<p>${key}: ${value}</p>`
					break
				case 'Телефон':
					stringFormData += `<p>${key}: <a href="tel:${value}">${value}</a></p>`
					break
				case 'Почта':
					stringFormData += `<p>${key}: <a href="mailto:${value}">${value}</a></p>`
			}
		}

		for (const product of cart.cart) {
			if (product.discount) {
				stringCart += `
				<p><a href="${SITE_URL}/products/${product.id.split(' ')[0]}">${product.name}</a><p>
				<p>Размер: ${product.size}</p>
				<p>Количество: ${String(product.quantity)} шт</p>
				<p>Скидка: -${String(product.discount.count)}%</p>
				<p>Цена за 1: ${String(product.discount.value)} руб (без скидки: ${String(product.priceOfOne)} руб)</p>
				<p>Цена за ${String(product.quantity)}: ${String(product.priceOfAll)} руб (без скидки: ${String(product.priceOfOne * product.quantity)} руб)</p>`
			} else {
				stringCart += `
				<p><a href="${SITE_URL}/products/${product.id.split(' ')[0]}">${product.name}</a><p>
				<p>Размер: ${product.size}</p>
				<p>Количество: ${String(product.quantity)} шт</p>
				<p>Цена за 1: ${String(product.priceOfOne)} руб</p>
				<p>Цена за ${String(product.quantity)}: ${String(product.priceOfAll)} руб</p>`
			}
		}

		const body = JSON.stringify({
			from,
			subject,
			text,
			html: `<section style="padding: 0px 40px; font-weight: 600;"><h1>Заявка с <a href="${SITE_URL}">сайта</a></h1><div>${stringFormData}</div><div><h2>Состав заказа:</h2>${stringCart}</div><div><h3>Итого:</h3><p>Общее количество товаров: ${String(cart.totalQuantity)} шт</p><p>Общая стоимость заказа: ${String(cart.totalPrice)} руб</p></div></section>`
		})

		const response = await fetch(`${API_URL}/send/mail`, {
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
