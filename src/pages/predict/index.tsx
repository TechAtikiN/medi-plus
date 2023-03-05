import Head from 'next/head'
import { DashLayout } from '../../layouts'

const Predict = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div>
          Predict
        </div>
      </DashLayout>
    </div>
  )
}

export default Predict
