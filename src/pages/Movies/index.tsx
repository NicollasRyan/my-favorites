import Head from "next/head";

import styles from "./styles.module.scss";

export default function Movies() {
  return (
    <>
      <Head>
        <title>Movies | my favorites</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <h1>Filmes</h1>
          <p>esses são meus flimes favoritos.</p>
          <div>
            <img src="/images/godfather.jpg" alt="GodFather" />
            <p>
              Este fime foi o mais foda que eu vi. <br />
              eu não sabia de nada sobre este filme, nem conhecia o al pacino,
              então este filme me suprendeu muito <br />
              <br />
              <span>Minha nota 13/10</span>
            </p>
          </div>

          <div>
            <img src="/images/godfather2.jpg" alt="GodFatherII" />
            <p>
              Este filme é sequencia do godfather. <br />
              esse filme mostra o Michael corleone tomando os negocíos que seu
              pai deixou e ele resolve vavios prolhemas da sua familia
              <br />
              <br />
              <span>Nota 10/10</span>
            </p>
          </div>

          <div>
            <img src="/images/endgame.jpg" alt="Avengers endgame" />
            <p>
              Este filme foi muito emocionate. <br />
              Porque é o fim de uma jornada de alguns herois do universo da
              marvel que eu sempre acompanhei deste crinça. <br />
              <br />
              <span>Nota 10/10</span>
            </p>
          </div>

          <div>
            <img src="/images/infinity.jpg" alt="Avengers inifinity war" />
            <p>
              Já este filme é o mais foda da marvel. <br />
              esse filme não é dos herios e sim do thanos e ele tomou conta
              deste filme <br />
              <br />
              <span>Nota: 10/10</span>
            </p>
          </div>

          <div>
            <img src="/images/scarface.jpg" alt="Scarface" />
            <p>
              Scarface é um dos filmes mais fodas que tem. <br />
              por conta da historia do Tony Montana um dos caras que foi muito
              longe com seus negocíos. <br />
              <br />
              <span>Nota: 9.9/10</span>
            </p>
          </div>

          <div>
            <img src="/images/knight.jpg" alt="Batman the dark knight" />
            <p>
              Este filme do Batmam é um dos melhores. <br />
              O coringa tambem toma conta do filme uma das melhores atuação do
              cinema. <br />
              <br />
              <span>Nota: 9.8/10</span>
            </p>
          </div>

          <div>
            <img src="/images/thebatman.jpg" alt="The Batman" />
            <p>
              Aqui este filme é um Bruce wayne com dois ano de batmam. <br />
              mas este filme só perde pro cavaleiro da trevas porque o coringa
              foi muito foda. <br />
              <br />
              <span>9.8/10</span>
            </p>
          </div>

          <div>
            <img src="/images/creed.jpg" alt="Creed: nascido para lutar" />
            <p>
              esse é um filme de ensinamentos para vida e eu achei esse filme
              muito foda.
              <br />
              <span>Nota: 9.8/10</span>
            </p>
          </div>

          <div>
            <img src="/images/bladerunner.jpg" alt="Blade runner" />
            <p>
              Este é o melhor filme do Ryan Gosling. <br />
              esse filme como ja diz o titulo se passar em 2049 e após descobrir
              um segredo que ameaça o que resta da sociedade, um novo policial
              parte em busca de Rick Deckard, que está desaparecido há 30 anos.{" "}
              <br />
              <br />
              <span>Nota: 9.4/10</span>
            </p>
          </div>

          <div>
            <img src="/images/ficht.jpg" alt="Anna the danger has a name" />
            <p>
              Muito bom. <br />
              Mas a primeira regra é não fale sobre o ***** **** <br />
              <br />
              <span>Nota: 9.2/10</span>
            </p>
          </div>
        </section>
      </main>
    </>
  );
}
