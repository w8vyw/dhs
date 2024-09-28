export interface IOrderFormData {
	ФИО: string
	Телефон: string
	Почта: string
	'Способ доставки': 'Самовывоз' | 'Курьером'
	Город?: string
	Улица?: string
	Дом?: string
	Этаж?: number
	Квартира?: string
	Комментарий?: string
	Соглашение: boolean
}
