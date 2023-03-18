import { FormEvent, useState } from "react"

const DiabetesForm = () => {

  const [data, setData] = useState('')

  const postData = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const reqBody = {
      meanRadius: 13,
      meanTexture: 21.82,
      meanPerimeter: 87.5,
      meanArea: 519.8,
      meanSmoothness: 0.1273,
      meanCompactness: 0.1932,
      meanConcavity: 0.1859,
      meanConcavePoints: 0.09353,
      meanSymmetry: 0.235,
      meanFractalDimension: 0.07389,
      radiusError: 0.3063,
      textureError: 1.002,
      perimeterError: 2.406,
      areaError: 24.32,
      smoothnessError: 0.005731,
      compactnessError: 0.03502,
      concavityError: 0.03553,
      concavePointsError: 0.01226,
      symmetryError: 0.02143,
      fractalDimensionError: 0.003749,
      worstRadius: 15.49,
      worstTexture: 30.73,
      worstPerimeter: 106.2,
      worstArea: 739.3,
      worstSmoothness: 0.1703,
      worstCompactness: 0.5401,
      worstConcavity: 0.539,
      worstConcavePoints: 0.206,
      worstSymmetry: 0.4378,
      worstFractalDimension: 0.1072
    }
    try {
      const response = await fetch('http://127.0.0.1:8000/breast-cancer',
        {
          method: 'POST',
          body: JSON.stringify(reqBody),
          headers: {
            'Content-type': 'application/json'
          }
        })
      const final = await response.json()
      setData(final)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(data)

  return (
    <div className='flex'>
      <form onSubmit={(e) => postData(e)} className='p-10' action=''>
        <p className='text-left text-indigo-900 font-semibold text-4xl my-4'>Enter relevant data for Diabetes Prediction</p>
        <div className='md:grid md:grid-cols-2 grid-cols-1  gap-x-10 gap-y-5'>
          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Item Identifier</label>
              <input className='form-input' type='text' />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Weight</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Fat Content</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Visibility</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item Type</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Item MRP</label>
              <input className='form-input' type="text" />
            </div>
          </div>

          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Identifier</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Establishment Year</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Size</label>
              <input className='form-input' type="text" />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor="">Outlet Location Type</label>
              <input className='form-input' type="text" />
            </div>

          </div>
        </div>

        <button type='submit' className='bg-indigo-800 px-4 py-3 text-xl text-white font-semibold rounded-2xl mt-10 w-1/2'>
          Predict
        </button>
      </form>
      <div className=''>
        <h1 className='text-2xl font-semibold text-indigo-600 p-6'>Description of the input values</h1>
      </div>
    </div>
  )
}

export default DiabetesForm