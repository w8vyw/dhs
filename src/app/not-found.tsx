import type { Metadata } from 'next'

import { NotFoundScreen } from '@/screens/not-found/NotFound'

export const metadata: Metadata = {
	title: 'Ничего не найдено'
}

export default function NotFound() {
	return <NotFoundScreen />
}
