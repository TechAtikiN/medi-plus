import Head from 'next/head'
import { DashLayout } from '../layouts'

const Tablets = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div>
          Tablets
        </div>
      </DashLayout>
    </div>
  )
}

export default Tablets
