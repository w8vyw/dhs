import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Reviews.module.scss'

import { Container } from '@/ui/container/Container'

interface IReviewsProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Reviews({ className, ...props }: IReviewsProps) {
	return (
		<section
			className={cn(styles.reviews, className)}
			{...props}
		>
			<Container className={styles.container}>
				<iframe
					className={styles.iframe}
					src='https://yandex.ru/maps-reviews-widget/55639407018?comments'
				></iframe>
			</Container>
		</section>
	)
}
