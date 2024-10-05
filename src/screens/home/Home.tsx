import styles from './Home.module.scss'

import { About } from './about/About'
import { Contacts } from './contacts/Contacts'
import { Hero } from './hero/Hero'
import { Partners } from './partners/Partners'
import { Reviews } from './reviews/Reviews'
import { Services } from './services/Services'
import { Team } from './team/Team'

export function HomeScreen() {
	return (
		<>
			<Hero />
			<About />
			<Team />
			<Services />
			<Partners />
			<Reviews />
			<Contacts />
		</>
	)
}
