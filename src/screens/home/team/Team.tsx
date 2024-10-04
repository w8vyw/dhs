import NextImage from 'next/image'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './Team.module.scss'

import { team } from '@/data/team'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

interface ITeamProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Team({ className, ...props }: ITeamProps) {
	return (
		<section
			id='team'
			className={cn(styles.team, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Наша команда</Heading>
				<div className={styles.content}>
					<ul className={styles.list}>
						{team.map((member, index) => (
							<li
								key={index}
								className={styles.member}
							>
								{member.image ? (
									<div className={styles.imageContainer}>
										<NextImage
											className={styles.image}
											src={member.image}
											alt=''
											fill
										/>
									</div>
								) : (
									'-'
								)}
								<div className={styles.text}>
									<p className={styles.name}>{member.name}</p>
									<p className={styles.role}>{member.role}</p>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Container>
		</section>
	)
}
