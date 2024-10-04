import NextImage from 'next/image'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Partners.module.scss'

import Alfaparf from '@/images/partners/alfaparf.png'
import Arganmidas from '@/images/partners/arganmidas.png'
import Behair from '@/images/partners/behair.png'
import Dalton from '@/images/partners/dalton.png'
import Eldan from '@/images/partners/eldan.png'
import Epica from '@/images/partners/epica.png'
import Klio from '@/images/partners/klio.png'
import Lebel from '@/images/partners/lebel.png'
import Nook from '@/images/partners/nook.png'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

interface IPartnersProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Partners({ className, ...props }: IPartnersProps) {
	return (
		<section
			id='partners'
			className={cn(styles.partners, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Наши партнеры</Heading>
				<div className={styles.content}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Eldan}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Dalton}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Lebel}
								alt=''
								placeholder='blur'
							/>
						</li>

						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Behair}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Epica}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Klio}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Nook}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Arganmidas}
								alt=''
								placeholder='blur'
							/>
						</li>
						<li className={styles.item}>
							<NextImage
								className={styles.image}
								src={Alfaparf}
								alt=''
								placeholder='blur'
							/>
						</li>
					</ul>
				</div>
			</Container>
		</section>
	)
}
