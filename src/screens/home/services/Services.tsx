'use client'

import type { ComponentPropsWithoutRef } from 'react'
import { useEffect, useState } from 'react'

import cn from 'clsx'

import styles from './Services.module.scss'

import { priceLists, tabs } from '@/data/price'

import type { ITab } from '@/types/global'

import { Container } from '@/ui/container/Container'
import { Heading } from '@/ui/heading/Heading'

import { PriceList } from './price-list/PriceList'

interface IServicesProps extends ComponentPropsWithoutRef<'section'> {
	prop?: string
}

export function Services({ className, ...props }: IServicesProps) {
	const [tab, setTab] = useState<ITab>(tabs[0])
	const [subTab, setSubTab] = useState<ITab | null>(tabs.find(t => t.label === tab.label)?.subTabs?.[0] ?? null)
	const [priceList, setPriceList] = useState(priceLists.find(p => p.title === subTab?.label || p.title === tab.label))

	useEffect(() => {
		setSubTab(tabs.find(t => t.label === tab.label)?.subTabs?.[0] ?? null)
	}, [tab])

	useEffect(() => {
		setPriceList(priceLists.find(priceList => priceList.title === subTab?.label || priceList.title === tab.label))
	}, [tab, subTab])

	return (
		<section
			id='services'
			className={cn(styles.servicesSection, className)}
			{...props}
		>
			<Container className={styles.container}>
				<Heading className={styles.heading}>Прайс</Heading>
				<p className={styles.subHeading}>Вы будете точно знать стоимость вашей услуги</p>
				<div className={styles.tabs}>
					<ul className={styles.list}>
						{tabs.map((t, index) => (
							<li key={`tab-${index.toString()}`}>
								<button
									type='button'
									onClick={() => setTab(t)}
									className={cn(styles.tab, t === tab && styles.active)}
								>
									{t.label}
								</button>
							</li>
						))}
					</ul>
					<ul className={styles.list}>
						{tab.subTabs?.map((t, index) => (
							<li key={`subTab-${index.toString()}`}>
								<button
									type='button'
									onClick={() => setSubTab(t)}
									className={cn(styles.tab, t === subTab && styles.active)}
								>
									{t.label}
								</button>
							</li>
						))}
					</ul>
				</div>
				<PriceList priceList={priceList} />
			</Container>
		</section>
	)
}
