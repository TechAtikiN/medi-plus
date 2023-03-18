import Head from 'next/head'
import Card from '../components/Card'
import { DashLayout } from '../layouts'

const Doctors = () => {
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div className='m-4  '>
          <h1 className='text-4xl py-10 rounded-sm text-center text-white bg-indigo-600 font-medium'>Find Doctors near you</h1>
          <div className='flex sm:flex-row flex-col sm:space-x-10 justify-center items-center'>
            <select className='rounded-full w-full sm:w-1/2 border border-indigo-600 p-3 my-4'  >
              <option value="" disabled selected>Select Speacialization</option>
            </select>
            <select className='rounded-full w-full sm:w-1/2 border border-indigo-600 p-3 my-4' placeholder='Enter your location' >
              <option value="" disabled selected>Select Location</option>
            </select>
            <button className='rounded-full w-12 h-12 bg-indigo-600 text-white flex justify-center items-center'>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <p className='text-4xl m-2 my-3'><span className='font-bold'>248</span> Results Found</p>
          <div className='grid grid-cols-1 sm:grid-cols-2 justify-between'>
              <Card />
              <Card />
              <Card />
              <Card />
          </div>
        </div>
      </DashLayout>
    </div>
  )
}

export default Doctors
