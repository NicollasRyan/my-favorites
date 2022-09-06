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

                    <div>
                        <img src="/images/endgame.jpg" alt="Avengers endgame" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/infinity.jpg" alt="Avengers inifinity war" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/scarface.jpg" alt="Scarface" />
                        <p></p>
                    </div>
                    
                    <div>
                        <img src="/images/knight.jpg" alt="Batman the dark knight" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/thebatman.jpg" alt="The Batman" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/bladerunner.jpg" alt="Blade runner" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/americanpsycho.jpg" alt="American psycho" />
                        <p></p>
                    </div>

                    <div>
                        <img src="/images/anna.jpg" alt="Anna the danger has a name" />
                        <p></p>
                    </div>

                </section>
            </main>

        </>
    )
}