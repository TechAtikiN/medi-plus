import type { NextPage } from 'next'
import Head from 'next/head'
import { DashLayout } from '../layouts'
import Navbar from '../components/HomeComponents/Navbar'
import HeroSection from '../components/HomeComponents/HeroSection'
import Card from '../components/HomeComponents/Card'
import CardRow from '../components/HomeComponents/CardRow'
import CircleCard from '../components/HomeComponents/CircleCard'
import CircleCardRow from '../components/HomeComponents/CircleCardRow'
import Features from '../components/HomeComponents/Features'


const Home: NextPage = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar />
      <HeroSection />
      <CardRow />
      <CircleCardRow />
      <Features />
    </div>
  )
}

export default Home
