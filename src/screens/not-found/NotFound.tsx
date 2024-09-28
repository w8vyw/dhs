'use client'

import { useRouter } from 'next/navigation'

import styles from './NotFound.module.scss'

import { Button } from '@/ui/button/Button'
import { Container } from '@/ui/container/Container'
import { Heading1 } from '@/ui/heading/Heading'

export function NotFoundScreen() {
	const router = useRouter()

	return (
		<div className={styles.notFound}>
			<Container>
				<Heading1 className={styles.heading}>Ошибка 404 | Ничего не найдено</Heading1>
				<Button
					className={styles.button}
					onClick={() => {
						router.back()
					}}
				>
					вернуться назад
				</Button>
			</Container>
		</div>
	)
}
