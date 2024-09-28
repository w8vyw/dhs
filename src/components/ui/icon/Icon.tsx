import { type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Icon.module.scss'

interface IIconProps extends ComponentPropsWithoutRef<'svg'> {
	name: string
}

export function Icon({ name, className, ...props }: IIconProps) {
	return (
		<svg
			className={cn(styles.icon, className)}
			{...props}
		>
			<use href={`/images/sprite.svg#${name}`} />
		</svg>
	)
}
