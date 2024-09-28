import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Address.module.scss'

interface IAddressProps extends ComponentPropsWithoutRef<'address'> {
	prop?: string
}

export function Address({ className, ...props }: IAddressProps) {
	return (
		<address
			className={cn(styles.address, className)}
			{...props}
		>
			<NextLink
				href='https://yandex.ru/maps/-/CCUgzXHEhC'
				target='_blank'
			></NextLink>
			Московская Область, г. Реутов, ул. Октября, вл.10, ТЦ Экватор, 2 этаж
		</address>
	)
}
