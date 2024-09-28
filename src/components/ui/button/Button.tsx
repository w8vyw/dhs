import NextLink from 'next/link'

import { forwardRef } from 'react'

import cn from 'clsx'

import styles from './Button.module.scss'

import { TButtonLinkProps, TButtonProps } from './types'

export const Button = forwardRef<HTMLButtonElement, TButtonProps>(
	({ color = 'white', radius = 'none', className, children, ...props }, ref) => {
		return (
			<button
				ref={ref}
				type='button'
				className={cn(styles.button, styles[color], styles[radius], className)}
				{...props}
			>
				{children}
			</button>
		)
	}
)

Button.displayName = 'Button'

export const ButtonLink = forwardRef<HTMLAnchorElement, TButtonLinkProps>(
	({ color = 'white', radius = 'none', className, children, ...props }, ref) => {
		return (
			<NextLink
				ref={ref}
				className={cn(styles.button, styles[color], styles[radius], className)}
				{...props}
			>
				{children}
			</NextLink>
		)
	}
)

ButtonLink.displayName = 'ButtonLink'
