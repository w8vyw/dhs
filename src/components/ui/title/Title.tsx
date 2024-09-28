import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Title.module.scss'

interface ITitleProps extends ComponentPropsWithoutRef<'h3'> {
	prop?: string
}

export function Title({ children, className, ...props }: ITitleProps) {
	return (
		<h3
			className={cn(styles.title, className)}
			{...props}
		>
			{children}
		</h3>
	)
}
