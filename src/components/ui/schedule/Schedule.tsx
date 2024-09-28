import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Schedule.module.scss'

interface IScheduleProps extends ComponentPropsWithoutRef<'p'> {
	prop?: string
}

export function Schedule({ className, ...props }: IScheduleProps) {
	return (
		<p
			className={cn(styles.schedule, className)}
			{...props}
		>
			10:00 - 22:00 <span>Без выходных</span>
		</p>
	)
}
