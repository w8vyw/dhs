'use client'

import type { PropsWithChildren } from 'react'

import { LazyMotion, domAnimation } from 'framer-motion'

export function Providers({ children }: PropsWithChildren) {
	// console.log('Powered by w8vy.dev | @w8vyw')
	return (
		<LazyMotion
			strict
			features={domAnimation}
		>
			{children}
		</LazyMotion>
	)
}
