import { Metadata } from 'next'

import { HomeScreen } from '@/screens/home/Home'

export const metadata: Metadata = {
	title: 'Главная'
}

export default function Home() {
	return <HomeScreen />
}
