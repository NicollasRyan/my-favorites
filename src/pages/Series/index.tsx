import Head from "next/head";
import styles from './styles.module.scss';

export default function Series() {
    return(
        <>
            <Head>
                <title>Series | my favorites</title>
            </Head>

            <main className={styles.contentContainer}>
                <section className={styles.hero}>
                    <h1>Series</h1>
                    <p>Esses são meus Series favoritos. Aqui não vou colocar todas as series que eu assisti</p>
                    <div>
                        <img src="/images/peaky.jpg" alt="GodFather" />
                        <p>
                            Este a Serie foi o mais foda que eu vi. <br />
                            Eu lembro que no final de 2020 estava falndo desta serie, aí eu resovir assisti e foi a melhor desição da minha vida. <br />
                            Mas a serie conta a historia de Thomas Shelby um cara muito ambisioso que vai fazer de tudo para chegar ao poder <br />
                            <br />
                            <span>Minha nota 11/10</span>
                        </p>
                    </div> 

                    <div>
                        <img src="/images/bad.jpg" alt="GodFatherII" />
                        <p>
                            Esta serie foi a melhor que eu assisti, mas eu prefiro a de cima. <br />
                            Sempre fala muito bem desta serie, mas eu evitava de assisti, mas em 2022 eu assisti pra ver se era isso tudo mesmo. <br />
                            a Historia de um profesor de quimica que pegar câncer e vai produzir metafetamina com seu ex aulo viciado em meta, para deixar um dinhero para sua família<br />
                            <br />
                            <span>Nota 12/10</span>
                        </p>
                    </div>

                    <div>
                        <img src="/images/theboys.jpg" alt="Avengers endgame" />
                        <p>
                            Essa serie é muito foda. <br />
                            Essa serie conta como seria os herois na vida real<br />
                            <br />
                            <span>Nota 9.7/10</span> 
                        </p>
                    </div>

                    <div>
                        <img src="/images/saulgoodman.jpg" alt="Avengers inifinity war" />
                        <p>
                            É um derivado de breaking bad. <br />
                            essa serie conta a historia do Jimmy Mcgill ou Saul good man e tambem mostra o que aconteceu com ele depois de breaking bad <br />
                            <br />
                            <span>Nota: 9.4/10</span>
                        </p>
                    </div>

                    
                    <div>
                        <img src="/images/loki.jpg" alt="Batman the dark knight" />
                        <p>
                            O que aconteceu com o loki depois de vingadores utimato ?. <br />
                            Loki, Deus da Trapaça, sai da sombra de seu irmão para embarcar em uma aventura que ocorre após os eventos de "Vingadores: Ultimato"<br />
                            <br />
                            <span>Nota: 8.5/10</span>
                        </p>
                    </div>

                    <div>
                        <img src="/images/mocn.jpg" alt="The Batman" />
                        <p>
                            O Batman da marvel.<br />
                            Steven Grant e Marc Spector investigam mistérios dos deuses do Egito de dentro do mesmo corpo. <br />
                            <br />
                            <span>9.6/10</span> 
                        </p>
                    </div>

                    <div>
                        <img src="/images/lupin.jpg" alt="Blade runner" />
                        <p>
                            O melhor ladrão. <br />
                            Inspirado pelas aventuras de Arsène Lupin, o ladrão gentil Assane Diop quer se vingar de uma família rica por uma injustiça cometida contra o pai dele. <br />
                            <br />
                            <span>Nota: 9.4/10</span>
                        </p>
                    </div>

                    <div>
                        <img src="/images/narcos.jpg" alt="Scarface" />
                        <p>
                            ANIDA NÂO TERMINEI <br />
                            mas deve ser muito foda. <br />
                            <br />
                            <span>Nota: 9.7/10</span>
                        </p>
                    </div>
                </section>
            </main>

        </>
    )
}