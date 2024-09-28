'use client'

import NextLink from 'next/link'
import { redirect } from 'next/navigation'
import { useRouter } from 'next/navigation'

import type { ComponentPropsWithoutRef } from 'react'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'

import cn from 'clsx'

import { useCartStore } from '@/providers/CartStoreProvider'

import styles from './OrderForm.module.scss'

import { sendOrder } from '@/services/sendOrder'

import { Button } from '@/ui/button/Button'

import type { IOrderFormData } from './types'

interface IOrderFormProps extends ComponentPropsWithoutRef<'form'> {
	prop?: string
}

export function OrderForm({ className, ...props }: IOrderFormProps) {
	const { cart, totalQuantity, totalPrice, clearCart } = useCartStore(state => state)
	const {
		handleSubmit,
		register,
		watch,
		reset,
		formState: { errors }
	} = useForm<IOrderFormData>({
		defaultValues: { ФИО: '', Телефон: '', Почта: '', 'Способ доставки': 'Курьером' },
		mode: 'onChange'
	})
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()

	const onSubmit: SubmitHandler<IOrderFormData> = async data => {
		setIsLoading(true)
		const response = await sendOrder({
			formData: data,
			cart: { cart: cart, totalQuantity: totalQuantity, totalPrice: totalPrice }
		})
		if (response === 'Success') {
			reset()
			clearCart()
			setIsLoading(false)
			// eslint-disable-next-line no-alert
			alert('Заказ успешно оформлен, спасибо, с вами свяжутся в ближайшее время!')
			router.push('/catalog')
		} else if (response === 'Cart is empty') {
			// eslint-disable-next-line no-alert
			alert('Заказ не оформлен. Корзина пуста.')
			setIsLoading(false)
		} else {
			// eslint-disable-next-line no-alert
			alert(
				'Что-то пошло не так... Пожалуйста, попробуйте позже. Если ошибка повторяется, пожалуйста, сообщите об этом нам на почту: info@ogladkaya.ru'
			)
			setIsLoading(false)
		}
	}

	return (
		<form
			className={cn(styles.orderForm, className)}
			// eslint-disable-next-line @typescript-eslint/no-misused-promises
			onSubmit={handleSubmit(onSubmit)}
			{...props}
		>
			<section className={cn(styles.section, styles.personalData)}>
				<h3 className={styles.title}>Личные данные</h3>
				<div className={styles.fields}>
					<label className={styles.fieldContainer}>
						<input
							className={cn(styles.field, errors['ФИО'] && styles.error)}
							type='text'
							placeholder='ФИО'
							autoComplete='off'
							aria-invalid={errors['ФИО'] ? 'true' : 'false'}
							{...register('ФИО', { required: 'Заполните обязательные поля' })}
						/>
						{errors['ФИО']?.message && <p className={styles.fieldError}>{errors['ФИО'].message}</p>}
					</label>
					<label className={styles.fieldContainer}>
						<input
							className={cn(styles.field, errors['Телефон'] && styles.error)}
							type='tel'
							placeholder='Телефон'
							autoComplete='off'
							aria-invalid={errors['Телефон'] ? 'true' : 'false'}
							{...register('Телефон', {
								required: 'Заполните обязательные поля',
								pattern: {
									value: /^(\+7|8)\d{10}$/,
									message: 'Введите корректный номер телефона, пример: 89998887766 или +79998887766'
								},
								minLength: {
									value: 11,
									message: 'Введите корректный номер телефона, минимальное количество цифр: 11'
								},
								maxLength: {
									value: 12,
									message: 'Введите корректный номер телефона, максимальное количество цифр: 12'
								}
							})}
						/>
						{errors['Телефон']?.message && <p className={styles.fieldError}>{errors['Телефон'].message}</p>}
					</label>
					<label className={styles.fieldContainer}>
						<input
							className={cn(styles.field, errors['Почта'] && styles.error)}
							type='email'
							autoComplete='off'
							placeholder='Почта'
							aria-invalid={errors['Почта'] ? 'true' : 'false'}
							{...register('Почта', {
								required: 'Заполните обязательные поля',
								pattern: {
									value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
									message: 'Введите корректную электронную почту'
								}
							})}
						/>
						{errors['Почта']?.message && <p className={styles.fieldError}>{errors['Почта'].message}</p>}
					</label>
				</div>
			</section>
			<section className={cn(styles.section, styles.shippingMethod)}>
				<h3 className={styles.title}>Способ доставки</h3>
				<div className={styles.fields}>
					<label className={styles.radioButton}>
						<input
							className={styles.radioInput}
							type='radio'
							value='Самовывоз'
							disabled
							{...register('Способ доставки')}
						/>
						<div className={styles.label}>самовывоз</div>
					</label>
					<label className={styles.radioButton}>
						<input
							className={styles.radioInput}
							type='radio'
							value='Курьером'
							{...register('Способ доставки')}
						/>
						<div className={styles.label}>курьером</div>
					</label>
				</div>
			</section>
			<section className={cn(styles.section, styles.address)}>
				{watch('Способ доставки') === 'Самовывоз' ? (
					'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ex asperiores error architecto obcaecati aliquid a, similique repellat? Accusantium nostrum a dolorum, voluptatem voluptatibus unde expedita soluta harum autem sunt.'
				) : (
					<>
						<h3 className={styles.title}>Адрес доставки</h3>
						<div className={styles.fields}>
							<label>
								<input
									className={cn(styles.field, errors['Город'] && styles.error)}
									type='text'
									placeholder='Город'
									autoComplete='off'
									aria-invalid={errors['Город'] ? 'true' : 'false'}
									{...register('Город', { required: 'Заполните обязательные поля' })}
								/>
							</label>
							<label>
								<input
									className={cn(styles.field, errors['Улица'] && styles.error)}
									type='text'
									placeholder='Улица'
									autoComplete='off'
									aria-invalid={errors['Улица'] ? 'true' : 'false'}
									{...register('Улица', { required: 'Заполните обязательные поля' })}
								/>
							</label>
							<div className={styles.subFields}>
								<label>
									<input
										className={cn(styles.field, errors['Дом'] && styles.error)}
										type='text'
										placeholder='Дом'
										autoComplete='off'
										aria-invalid={errors['Дом'] ? 'true' : 'false'}
										{...register('Дом', { required: 'Заполните обязательные поля' })}
									/>
								</label>
								<label>
									<input
										className={cn(styles.field, errors['Этаж'] && styles.error)}
										type='number'
										placeholder='Этаж'
										autoComplete='off'
										aria-invalid={errors['Этаж'] ? 'true' : 'false'}
										{...register('Этаж', { required: 'Заполните обязательные поля' })}
									/>
								</label>
								<label>
									<input
										className={cn(styles.field, errors['Квартира'] && styles.error)}
										type='text'
										placeholder='Квартира'
										autoComplete='off'
										aria-invalid={errors['Квартира'] ? 'true' : 'false'}
										{...register('Квартира', { required: 'Заполните обязательные поля' })}
									/>
								</label>
							</div>
							<label>
								<input
									className={styles.field}
									type='text'
									placeholder='Комментарий'
									autoComplete='off'
									{...register('Комментарий')}
								/>
							</label>
						</div>
						{(errors['Город']?.message ??
							errors['Улица']?.message ??
							errors['Дом']?.message ??
							errors['Этаж']?.message ??
							errors['Квартира']?.message) && <p className={styles.fieldError}>Заполните обязательные поля</p>}
					</>
				)}
			</section>
			<section className={cn(styles.section, styles.agreement)}>
				<label className={styles.checkbox}>
					<input
						className={styles.checkboxInput}
						type='checkbox'
						aria-invalid={errors['Соглашение'] ? 'true' : 'false'}
						{...register('Соглашение', {
							required: 'Пожалуйста, примите пользовательское соглашение.'
						})}
					/>
					<div className={styles.label}>
						Нажимая эту кнопку, Вы соглашаетесь с <NextLink href='/offer'> публичной офертой</NextLink> и{' '}
						<NextLink href='/privacy'>политикой конфиденциальности</NextLink> компании
					</div>
				</label>
				{errors['Соглашение']?.message && <p className={styles.fieldError}>{errors['Соглашение'].message}</p>}
			</section>
			<Button
				radius='right'
				className={styles.submitButton}
				type='submit'
				disabled={isLoading}
			>
				Оформить заказ
			</Button>
		</form>
	)
}
