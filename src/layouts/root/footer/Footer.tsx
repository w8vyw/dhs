'use client'

import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Footer.module.scss'

import { routes } from '@/data/routes'

import { Container } from '@/ui/container/Container'
import { Icon } from '@/ui/icon/Icon'
import { Logo } from '@/ui/logo/Logo'
import { W8 } from '@/ui/w8/W8'

export function Footer({ className, ...props }: ComponentPropsWithoutRef<'footer'>) {
	return (
		<footer
			className={cn(styles.footer, className)}
			{...props}
		>
			<div className={styles.main}>
				<Container className={styles.container}>
					<section className={cn(styles.section, styles.about)}>
						<Logo />
						<p className={styles.slogan}>Слоган слоган слоган слоган слоган слоган слоган слоган слоган</p>
						<div className={styles.requisites}>
							<p>ИП Хаирбекова Женнет Арсланбековна</p>
							<p>
								<span>ИНН</span> 1234567890
							</p>
						</div>
					</section>
					<section className={cn(styles.section, styles.navigation)}>
						<h3 className={styles.heading}>Навигация</h3>
						<ul className={styles.list}>
							{routes.map((route, index) => (
								<li key={index}>
									<NextLink
										className={styles.link}
										href={route.url}
									>
										{route.label}
									</NextLink>
								</li>
							))}
							<li>
								<NextLink
									className={styles.link}
									href='/privacy'
								>
									Политика конфиденциальности
								</NextLink>
							</li>
						</ul>
					</section>
				</Container>
			</div>
			<div className={styles.copyright}>
				<Container className={styles.container}>
					<p>© 2024 DJANET HAIR STUDIO | Все права защищены</p>
					<W8 color='light' />
				</Container>
			</div>
		</footer>
	)
}
