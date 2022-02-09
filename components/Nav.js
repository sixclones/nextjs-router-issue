import Link from 'next/link'
import { useRouter } from 'next/router'
import routes from '../routes'
import styles from './nav.module.css'

export default function Nav() {
	const router = useRouter()
	console.log('Log: -> Nav -> router.asPath', router.asPath)

	return (
		<nav>
			<ul>
				{routes.map(link => (
					<li key={link.slug}>
						<Link href={link.slug}>
							<a className={`${styles.link} ${router.asPath === link.slug ? styles.isActive : ''}`}>{link.label}</a>
						</Link>
					</li>
				))}
			</ul>
		</nav>
	)
}
