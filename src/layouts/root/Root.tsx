import { Inter } from 'next/font/google'
import localFont from 'next/font/local'

import { SpeedInsights } from '@vercel/speed-insights/next'
import cn from 'clsx'

import '@/styles/global.scss'

import { Footer } from './footer/Footer'
import { Header } from './header/Header'
import { Providers } from './providers/Providers'
import { ToTop } from './to-top/ToTop'

const inter = Inter({
	subsets: ['cyrillic', 'latin'],
	display: 'swap',
	weight: ['400', '500', '600', '700', '800', '900'],
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
				<Providers>
					<Header />
					<main>{children}</main>
					<Footer />
					<ToTop />
				</Providers>
				<SpeedInsights />
			</body>
		</html>
	)
}
