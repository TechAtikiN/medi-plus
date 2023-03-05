import type { NextPage } from 'next'
import Head from 'next/head'
import { DashLayout } from '../layouts'

const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div></div>
      </DashLayout>
    </div>
  )
}

export default Home
