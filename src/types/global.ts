import { type StaticImageData } from 'next/image'

export interface IRoute {
	url: string
	label: string
}

export interface IImage {
	imageData: StaticImageData
	alt: string
}

export type TPriceListTitle =
	| 'Парикмахерские услуги'
	| 'Окрашивание волос'
	| 'Стрижки'
	| 'Уход за волосами'
	| 'Укладки'
	| 'Ногтевой сервис'
	| 'Косметология'
	| 'Эстетическая косметология'
	| 'Аппаратная косметология'
	| 'Уход за телом'
	| 'Массаж'
	| 'Депиляция'
	| 'Перманентный макияж'

export interface ITab {
	label: TPriceListTitle
	subTabs?: ITab[]
}

export interface IPriceList {
	title: TPriceListTitle
	serviceCategories: IServiceCategory[]
}

export interface IServiceCategory {
	heading: string
	services: IService[]
}

export interface IService {
	title?: string
	prices: IPrice[]
	extra?: string
}

export interface IPrice {
	label: string
	value: string
	extra?: string
}
