import { type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Overlay.module.scss'

interface IOverlayProps extends ComponentPropsWithoutRef<'div'> {
	isActive?: boolean
}

export function Overlay({ isActive = false, className, ...props }: IOverlayProps) {
	return (
		<div
			className={cn(styles.overlay, isActive && styles.active, className)}
			{...props}
		></div>
	)
}
