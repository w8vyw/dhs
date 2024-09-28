import { type PropsWithChildren, type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Container.module.scss'

export function Container({
	children,
	className,
	...props
}: PropsWithChildren<ComponentPropsWithoutRef<'div'>>) {
	return (
		<div
			className={cn(styles.container, className)}
			{...props}
		>
			{children}
		</div>
	)
}
