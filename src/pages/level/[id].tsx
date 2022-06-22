import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'

import LevelInfoContent from "../../components/LevelInfoContent";

const Level: NextPage = () => {
  const router = useRouter();
  return (
    <div className="index">
      <Head>
        <title>Create Next </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <LevelInfoContent viewId={Number(router.query.id)} />
      </main>
    </div>
  )
}

export default Level
