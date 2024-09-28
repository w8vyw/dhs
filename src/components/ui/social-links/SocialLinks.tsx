import NextLink from 'next/link'

import { type ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './SocialLinks.module.scss'

import { Icon } from '../icon/Icon'

interface ISocialLinksProps extends ComponentPropsWithoutRef<'div'> {
	prop?: string
}

export function SocialLinks({ className, ...props }: ISocialLinksProps) {
	return (
		<div
			className={cn(styles.socialLinks, className)}
			{...props}
		>
			<ul className={styles.list}>
				<li className={styles.item}>
					<NextLink
						href='https://instagram.com/djanet_hair_studio'
						target='_blank'
						className={styles.link}
					>
						<Icon
							name='inst'
							className={styles.icon}
						/>
					</NextLink>
				</li>
				<li className={styles.item}>
					<NextLink
						href='https://t.me/djanet_hair_studio'
						target='_blank'
						className={styles.link}
					>
						<Icon
							name='tg'
							className={styles.icon}
						/>
					</NextLink>
				</li>
				<li className={styles.item}>
					<NextLink
						href='https://wa.me/79636021001'
						target='_blank'
						className={styles.link}
					>
						<Icon
							name='wa'
							className={styles.icon}
						/>
					</NextLink>
				</li>
				<li className={styles.item}>
					<NextLink
						href='https://vk.com/djanethairstudio'
						target='_blank'
						className={styles.link}
					>
						<Icon
							name='vk'
							className={styles.icon}
						/>
					</NextLink>
				</li>
			</ul>
		</div>
	)
}
