import Head from 'next/head'
import { useState } from 'react'
import { BreastCancerForm, DiabetesForm, HeartDiseaseForm } from '../../components'
import { DashLayout } from '../../layouts'

const Predict = () => {

  const [disease, setDisease] = useState('Diabetes')

  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div className=' bg-indigo-50'>
          {/* select disease */}
          <select
            className='bg-indigo-300 focus:outline px-4 py-3 ml-10 rounded-lg font-semibold mt-3'
            name=''
            id=''
            value={disease}
            onChange={(e) => { setDisease(e.target.value) }}
          >
            <option value='Diabetes'>Diabetes Prediction</option>
            <option value='Breast Cancer'>Breast Cancer Prediction</option>
            <option value='Heart Disease'>Heart Disease Prediction</option>
          </select>

          <div className='grid grid-cols-9'>
            <div className='col-span-6 h-screen rounded-l-3xl'>
              {disease === 'Diabetes' ? <DiabetesForm /> :
                disease === 'Breast Cancer' ? <BreastCancerForm /> :
                  disease === 'Heart Disease' ? <HeartDiseaseForm /> : null}
            </div>

            <div className='col-span-3 bg-indigo-50'>

            </div>
          </div>
        </div>
      </DashLayout>
    </div>
  )
}

export default Predict
