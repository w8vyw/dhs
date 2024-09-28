import NextImage from 'next/image'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Hero.module.scss'

import ContentImage from '@/images/hero.jpg'

import { Container } from '@/ui/container/Container'

interface IHeroProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Hero({ className, ...props }: IHeroProps) {
	return (
		<section
			className={cn(styles.hero, className)}
			{...props}
		>
			<Container className={styles.container}>
				<h1 className={styles.heading}>
					<span className={styles.part1}>Студия колористики</span> <span className={styles.part2}>by</span>{' '}
					<span className={styles.part3}>Djanet Hair</span>
				</h1>
				<NextImage
					className={styles.image}
					src={ContentImage}
					alt=''
					placeholder='blur'
				/>
			</Container>
		</section>
	)
}
