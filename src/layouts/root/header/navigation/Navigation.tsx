'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { forwardRef, type ComponentPropsWithRef } from 'react'

import cn from 'clsx'

import styles from './Navigation.module.scss'

import { routes } from '@/data/routes'

import { Container } from '@/ui/container/Container'

interface INavigationProps extends ComponentPropsWithRef<'nav'> {
	isMenuOpened: boolean
	menuToggle: () => void
}

export const Navigation = forwardRef<HTMLElement, INavigationProps>(
	({ isMenuOpened, menuToggle, className, ...props }, ref) => {
		const pathname = usePathname()
		const isActiveLink = (url: string) => pathname === url

		return (
			<nav
				ref={ref}
				className={cn(styles.navigation, isMenuOpened && styles.opened, className)}
				{...props}
			>
				<Container className={styles.container}>
					<ul className={styles.list}>
						{routes.map((route, index) => (
							<li
								key={index}
								className={styles.item}
								onClick={menuToggle}
							>
								<NextLink
									className={cn(styles.link, isActiveLink(route.url) && styles.active)}
									href={route.url}
								>
									{route.label}
								</NextLink>
							</li>
						))}
					</ul>
				</Container>
			</nav>
		)
	}
)

Navigation.displayName = 'Navigation'
