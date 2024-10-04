import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Reviews.module.scss'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

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
				<Heading className={styles.heading}>Отзывы</Heading>
				<div className={styles.rev}>
					<iframe
						className={styles.iframe}
						src='https://yandex.ru/maps-reviews-widget/55639407018?comments'
					></iframe>
				</div>
			</Container>
		</section>
	)
}
