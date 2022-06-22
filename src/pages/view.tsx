import type { NextPage } from 'next'
import Head from 'next/head'
import NumberContent from '../components/NumberContent'
import ViewControl from '../components/ViewControl'
import FrequentlyItems from '../components/FrequentlyItems'
import ViewFlowInfoContent from '../components/ViewFlowInfoContent'

const View: NextPage = () => {
  return (
    <div className="view">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="main">
        <FrequentlyItems />
        <ViewFlowInfoContent />
        <NumberContent />
        <ViewControl />
      </main>
    </div>
  )
}

export default View
