import Head from "next/head";
import { Footer } from "../components/Footer";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | my favorites</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>Olá, bem-vindo</span>
          <h2>
            Aqui vamos listar meus filmes e séries favoritos. E também falarei
            minha nota para cada um
          </h2>
        </section>

        <img src="/images/movies.jpg" alt="" />
      </main>

      <Footer />
    </>
  );
}
