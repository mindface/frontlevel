import type { NextPage } from 'next'
import Head from 'next/head'
import NumberContent from "../components/NumberContent";
import LevelContent from "../components/LevelContent";

const Home: NextPage = () => {
  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <LevelContent />
      </main>
    </div>
  )
}

export default Home
