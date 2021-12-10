import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Layout from '../src/components/layout'

const Home: NextPage = () => {
  const title = `Vivian's Shoppe`;

  return (
    <div className="h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/rainbows/rainbow-blue-svgrepo-com.svg" />
      </Head>
      <Layout>
      <main> 
        <h1 className="text-5xl"> 
          Welcome to vleung.art!
        </h1>
      </main>
      </Layout>
    </div>
  )
}

export default Home
