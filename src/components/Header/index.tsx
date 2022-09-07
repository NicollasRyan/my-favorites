import styles from './styles.module.scss'

export function Header() {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <h1>My favorites movies and series</h1>
                <nav>
                    <a href='/' className={styles.active}>Home</a>
                    <a href='/Movies'>Movies</a>
                    <a href='/Series'>Series</a>
                </nav>
            </div>
        </header>
    )
}