import { Inter } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import { Suspense } from 'react'

import { SpeedInsights } from '@vercel/speed-insights/next'
import cn from 'clsx'

import '@/styles/global.scss'

import { YandexMetrika } from './YandexMetrika'
import { Header } from './header/Header'
import { Providers } from './providers/Providers'
import { ToTop } from './to-top/ToTop'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: 'variable',
	style: 'normal',
	variable: '--font-primary'
})

const chekhovskoy = localFont({
	src: './fonts/Chekhovskoy-400.woff2',
	display: 'swap',
	weight: '400',
	variable: '--font-secondary'
})

const smoothStone = localFont({
	src: './fonts/SmoothStone-400.woff2',
	display: 'swap',
	weight: '400',
	variable: '--font-decor'
})

export function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html
			lang='ru'
			className='__poweredBy__w8vy.dev__Next.js__'
		>
			<body className={cn(inter.className, chekhovskoy.variable, smoothStone.variable)}>
				<Script
					id='yandex-maps'
					strategy='afterInteractive'
					src='https://api-maps.yandex.ru/v3/?apikey=cbb5d9b4-e809-4837-9fd5-b4f94b284f13&lang=ru_RU'
				/>
				<Providers>
					<Header />
					<main>{children}</main>
					<ToTop />
				</Providers>
				<Suspense fallback={<></>}>
					<YandexMetrika counterId='94350995' />
				</Suspense>
				<SpeedInsights />
			</body>
		</html>
	)
}
