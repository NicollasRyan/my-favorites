import Head from 'next/head'

import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head> 
        <title>Home | my favorites</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Hello, welcome</span>
          <h2>
            Here we will list my <span>favorite movies and series.</span> <br />
            And I will also speak my note to each one
          </h2>
        </section>

        <img src="/images/movies.jpg" alt="" />
      </main>
    </>
  )
}

