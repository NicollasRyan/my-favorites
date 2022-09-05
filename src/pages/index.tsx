import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head> 
        <title>Home | my favorites</title>
      </Head>

      <main>
        <section>
          <span>Hello, welcome</span>
          <h2>
            Here we will list my favorite movies and series. <br />
            and I will also speak my note to each one
          </h2>
        </section>

        <img src="/images/movies.jpg" alt="" />
      </main>
    </>
  )
}

