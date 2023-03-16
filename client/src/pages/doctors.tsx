import Head from 'next/head'
import { DashLayout } from '../layouts'

const Doctors = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div>
          Doctors
        </div>
      </DashLayout>
    </div>
  )
}

export default Doctors
