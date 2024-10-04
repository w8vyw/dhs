import type { ComponentPropsWithoutRef } from 'react'

import cn from 'clsx'

import styles from './PriceList.module.scss'

import type { IPriceList } from '@/types/global'

interface IPriceListProps extends ComponentPropsWithoutRef<'div'> {
	priceList?: IPriceList
}

export function PriceList({ priceList, className, ...props }: IPriceListProps) {
	return (
		<div
			className={cn(styles.priceList, className)}
			{...props}
		>
			{priceList?.serviceCategories.map((category, index) => (
				<div
					key={`category-${index.toString()}`}
					className={styles.category}
				>
					<h3 className={styles.heading}>{category.heading}</h3>
					<div className={styles.services}>
						{category.services.map((service, index) => (
							<div
								key={`service-${index.toString()}`}
								className={styles.service}
							>
								{service.title && <p className={styles.title}>{service.title}</p>}
								<ul className={styles.prices}>
									{service.prices.map((price, index) => (
										<li
											key={`price-${index.toString()}`}
											className={styles.price}
										>
											<p className={styles.label}>{price.label}</p>
											{price.extra && <p className={styles.extra}>{price.extra}</p>}
											<p className={styles.value}>{price.value}р</p>
										</li>
									))}
								</ul>
								{service.extra && <p className={styles.extra}>{service.extra}</p>}
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	)
}
