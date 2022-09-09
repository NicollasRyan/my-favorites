import { useRouter } from 'next/router'
import Link from 'next/link'

import styles from './styles.module.scss'

export function Header() {
    const { asPath } = useRouter();

    console.log(asPath)
    
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>My favorites movies and series</h1>
                <nav>
                    <Link href={'/'}>
                        <a className={asPath === '/' ? styles.active : ''}>Home</a>
                    </Link>
                    <Link href={'/Movies'}>
                        <a className={asPath === '/Movies' ? styles.active : ''}>Movies</a>
                    </Link>
                    <Link href={'/Series'}>
                        <a className={asPath === '/Series' ? styles.active : ''}>Series</a>
                    </Link>
                    
                </nav>
            </div>
        </header>
    )
}