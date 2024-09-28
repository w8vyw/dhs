'use client'

import { RefObject, useEffect, useRef } from 'react'

export const useClickAway = (
	ref: RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[],
	cb: (event: MouseEvent | TouchEvent | FocusEvent | Event) => void,
	events: string[] = ['mousedown', 'touchstart', 'focusin']
) => {
	const savedCallback = useRef(cb)

	useEffect(() => {
		savedCallback.current = cb
	}, [cb])

	useEffect(() => {
		const handler = (event: MouseEvent | TouchEvent | FocusEvent | Event) => {
			const target = event.target as Node
			if (!target.isConnected) return

			const isAway = Array.isArray(ref)
				? ref.filter(r => !!r.current).every(r => r.current && !r.current.contains(target))
				: ref.current && !ref.current.contains(target)

			if (isAway) {
				savedCallback.current(event)
			}
		}

		for (const event of events) {
			document.addEventListener(event, handler)
		}

		return () => {
			for (const event of events) {
				document.removeEventListener(event, handler)
			}
		}
	}, [events, ref])
}
