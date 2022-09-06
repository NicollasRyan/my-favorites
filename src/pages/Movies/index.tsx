import Head from "next/head";
import styles from './styles.module.scss'

export default function Movies() {
    return (
        <>
            <Head>
                <title>Movies | my favorites</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <div>
                        <img src="/images/godfather.jpg" alt="GodFather" />
                        <p></p>
                    </div> 

                    <div>
                        <img src="/images/godfather2.jpg" alt="GodFatherII" />
                        <p></p>
                    </div>
                </section>
            </main>

        </>
    )
}