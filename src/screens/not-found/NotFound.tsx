'use client'

import { useRouter } from 'next/navigation'

import styles from './NotFound.module.scss'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

export function NotFoundScreen() {
	const router = useRouter()

	return (
		<div className={styles.notFound}>
			<Container>
				<Heading className={styles.heading}>Ошибка 404 - Ничего не найдено</Heading>
				<button
					type='button'
					onClick={() => {
						router.back()
					}}
					className={styles.button}
				>
					вернуться назад
				</button>
			</Container>
		</div>
	)
}
