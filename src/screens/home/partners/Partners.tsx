import NextImage from 'next/image'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Partners.module.scss'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

interface IPartnersProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Partners({ className, ...props }: IPartnersProps) {
	return (
		<section
			id='partners'
			className={cn(styles.partners, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Наша команда</Heading>
				<div className={styles.content}></div>
			</Container>
		</section>
	)
}
