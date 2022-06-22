import type { NextPage } from 'next'
import Head from 'next/head'
import DiscContent from "../components/DiscContent";

const About: NextPage = () => {
  return (
    <div className="index">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <DiscContent />
      </main>
    </div>
  )
}

export default About