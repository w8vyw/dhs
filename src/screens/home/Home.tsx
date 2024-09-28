import styles from './Home.module.scss'

import { About } from './about/About'
import { Hero } from './hero/Hero'
import { Reviews } from './reviews/Reviews'
import { Team } from './team/Team'

export function HomeScreen() {
	return (
		<>
			<Hero />
			<About />
			<Team />
			<Reviews />
		</>
	)
}
