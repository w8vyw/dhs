import NextImage from 'next/image'

import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './About.module.scss'

import ContentImage from '@/images/about.jpg'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

interface IAboutProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function About({ className, ...props }: IAboutProps) {
	return (
		<section
			id='about'
			className={cn(styles.about, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>О нас</Heading>
				<div className={styles.content}>
					<div className={styles.text}>
						<p>
							Добро пожаловать в DJANET HAIR STUDIO - уютную студию красоты, место, где Вы сможете почувствовать себя
							уникальной и неповторимой.
						</p>
						<p>
							Мы специализируемся на колористике, наши опытные колористы готовы воплотить в жизнь самые смелые Ваши
							пожелания, подобрать идеальный цвет, дополнив его уходом и стилем.
						</p>
						<p>
							У нас Вы найдете широкий спектр услуг - окрашивание, мелирование, Airtouch, Shatush, и многое другое! Мы
							работаем только с профессиональной продукцией, чтобы гарантировать Вам максимально качественный результат!
							Но DJANET HAIR STUDIO это не только колористика.
						</p>
						<p>
							Мы предлагаем так же услуги ногтевого сервиса, эстетической косметологии, перманентного макияжа, массажа и
							ухода за телом. В нашей студии Вы найдете все необходимое для создания полного образа.
						</p>
						<p>
							Если Вы человек, который ценит качество, бережный подход, уют и комфорт, тогда эта студия создана
							специально для Вас.
						</p>
					</div>
					<NextImage
						className={styles.image}
						src={ContentImage}
						alt=''
						placeholder='blur'
					/>
				</div>
			</Container>
		</section>
	)
}
