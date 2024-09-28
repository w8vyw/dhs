import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Heading.module.scss'

export function Heading({ className, children, ...props }: ComponentPropsWithoutRef<'h2'>) {
	return (
		<h2
			className={cn(styles.heading, className)}
			{...props}
		>
			{children}
		</h2>
	)
}
