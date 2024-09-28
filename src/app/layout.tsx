import { Metadata } from 'next'

import { RootLayout } from '@/layouts/root/Root'

import '@/styles/global.scss'

import { NO_INDEX_PAGE, SITE_URL } from '@/constants/seo'

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: '',
	description: '',
	applicationName: '',
	authors: { name: 'w8vy', url: 'https://w8vy.dev' },
	generator: 'Next.js 14',
	referrer: 'origin',
	creator: 'w8vy',
	alternates: {
		canonical: ''
	},
	openGraph: {
		type: 'website',
		url: '',
		siteName: '',
		title: '',
		description: ''
	},
	verification: {
		yandex: '',
		google: ''
	},
	formatDetection: { telephone: false },
	...NO_INDEX_PAGE
}

export default function Layout({
	children
}: Readonly<{
	children: React.ReactNode
}>) {
	return <RootLayout>{children}</RootLayout>
}
