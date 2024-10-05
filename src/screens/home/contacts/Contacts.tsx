'use client'

import NextLink from 'next/link'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Contacts.module.scss'

import { Address } from '@/ui/address/Address'
import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'
import { Schedule } from '@/ui/schedule/Schedule'
import { SocialLinks } from '@/ui/social-links/SocialLinks'

interface IContactsProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Contacts({ className, ...props }: IContactsProps) {
	return (
		<section
			id='contacts'
			className={cn(styles.contacts, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Контакты</Heading>
				<div className={styles.content}>
					<div className={styles.text}>
						<Address className={styles.address} />
						<Schedule className={styles.schedule} />
						<NextLink
							className={styles.link}
							href='tel:+7 963 602 10 01'
						>
							+7 963 602 10 01
						</NextLink>
						<SocialLinks className={styles.social} />
					</div>
					<div className={styles.map}>
						<iframe
							className={styles.ym}
							src='https://yandex.ru/map-widget/v1/org/djanet_hair/55639407018/?indoorLevel=1&ll=37.854298%2C55.751391&utm_source=share&z=16.8'
						/>
					</div>
				</div>
			</Container>
		</section>
	)
}
