'use client'

import NextLink from 'next/link'
import { usePathname } from 'next/navigation'

import { useState, useRef, useEffect } from 'react'
import type { ElementRef } from 'react'

import cn from 'clsx'

import styles from './Header.module.scss'

import { mobileMenu } from '@/constants/breakpoints'

import { useClickAway } from '@/hooks/useClickAway'
import { useMediaQuery } from '@/hooks/useMediaQuery'

import { Address } from '@/ui/address/Address'
import { Container } from '@/ui/container/Container'
import { Logo } from '@/ui/logo/Logo'
import { Schedule } from '@/ui/schedule/Schedule'
import { SocialLinks } from '@/ui/social-links/SocialLinks'

import { MenuButton } from './menu-button/MenuButton'
import { Navigation } from './navigation/Navigation'

export function Header() {
	const isMobile = useMediaQuery(`(width <= ${mobileMenu})`, false)
	const [isMenuOpened, setIsMenuOpened] = useState(false)
	const menuButtonRef = useRef<ElementRef<'button'>>(null)
	const menuRef = useRef<ElementRef<'nav'>>(null)
	const pathname = usePathname()

	const menuToggle = () => {
		setIsMenuOpened(!isMenuOpened)
	}

	useClickAway([menuRef, menuButtonRef], () => setIsMenuOpened(false))

	useEffect(() => {
		setIsMenuOpened(false)
	}, [pathname])

	useEffect(() => {
		setIsMenuOpened(false)
	}, [isMobile])

	return (
		<header className={styles.header}>
			<div className={styles.topLine}>
				<Container className={styles.container}>
					<Logo className={styles.logo} />
					<Address className={styles.address} />
					<Schedule className={styles.schedule} />
					<NextLink
						className={styles.tel}
						href='tel:+7 963 602 10 01'
					>
						+7 963 602 10 01
					</NextLink>
					<SocialLinks className={styles.socialLinks} />
					{isMobile && (
						<MenuButton
							ref={menuButtonRef}
							isActive={isMenuOpened}
							onClick={menuToggle}
						/>
					)}
				</Container>
			</div>
			<Navigation
				ref={menuRef}
				isMenuOpened={isMenuOpened}
			/>
		</header>
	)
}
