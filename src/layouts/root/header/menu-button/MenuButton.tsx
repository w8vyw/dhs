import { forwardRef, type ComponentPropsWithRef } from 'react'

import cn from 'clsx'

import styles from './MenuButton.module.scss'

interface IMenuButtonProps extends ComponentPropsWithRef<'button'> {
	isActive?: boolean
}

export const MenuButton = forwardRef<HTMLButtonElement, IMenuButtonProps>(
	({ isActive = false, className, ...props }, ref) => {
		return (
			<button
				ref={ref}
				className={cn(styles.menuButton, isActive && styles.active, className)}
				type='button'
				{...props}
			>
				<span></span>
			</button>
		)
	}
)

MenuButton.displayName = 'MenuButton'
