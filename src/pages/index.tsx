import Head from 'next/head'
import styles from '../styles/home.module.scss'

export default function Home() {
  return (
    <>
      <Head> 
        <title>Home | my favorites</title>
      </Head>

      <h1 className={styles.title}>
        My Movies and series
      </h1>
    </>
  )
}
