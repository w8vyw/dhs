import { type StaticImageData } from 'next/image'

export interface IRoute {
	url: string
	label: string
}

export interface IImage {
	imageData: StaticImageData
	alt: string
}
