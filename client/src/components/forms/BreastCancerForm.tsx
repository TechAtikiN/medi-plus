import { FormEvent, useState } from 'react';
import { useForm } from 'react-hook-form';

type FormValues = {
  meanRadius: number;
  meanTexture: number;
  meanPerimeter: number;
  meanArea: number;
  meanSmoothness: number;
  meanCompactness: number
  meanConcavity: number
  meanConcavePoints: number
  meanSymmetry: number
  meanFractalDimension: number
  radiusError: number
  textureError: number
  perimeterError: number
  areaError: number
  smoothnessError: number
  compactnessError: number
  concavityError: number
  concavePointsError: number
  symmetryError: number
  fractalDimensionError: number
  worstRadius: number
  worstTexture: number
  worstPerimeter: number
  worstArea: number
  worstSmoothness: number
  worstCompactness: number
  worstConcavity: number
  worstConcavePoints: number
  worstSymmetry: number
  worstFractalDimension: number
}


const BreastCancerForm = () => {

  const [ans, setAns] = useState('')

  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({});
  const submitData = async (data: FormValues) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/breast-cancer',
        {
          method: 'POST',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json'
          }
        })
      const final = await response.json()
      setAns(final)
    }
    catch (err) {
      console.log(err)
    }
  }
  console.log(ans)
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)} className='p-10' action=''>
        <p className='text-left text-indigo-900 font-semibold text-4xl my-4'>Enter relevant data for Breast Cancer Prediction</p>
        <div className='grid grid-cols-2 gap-x-10 gap-y-5 h-[35rem] overflow-y-scroll'>
          <div className='space-y-2'>
            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Radius</label>
              <input className='form-input' type='text' {...register('meanRadius')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Texture</label>
              <input className='form-input' type='text' {...register('meanTexture')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Perimeter</label>
              <input className='form-input' type='text' {...register('meanPerimeter')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Area</label>
              <input className='form-input' type='text' {...register('meanArea')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Smoothness</label>
              <input className='form-input' type='text' {...register('meanSmoothness')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Compactness</label>
              <input className='form-input' type='text'{...register('meanCompactness')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Concavity</label>
              <input className='form-input' type='text' {...register('meanConcavity')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Concave Points</label>
              <input className='form-input' type='text' {...register('meanConcavePoints')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Symmetry</label>
              <input className='form-input' type='text' {...register('meanSymmetry')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Mean Fractioanl Dimension</label>
              <input className='form-input' type='text' {...register('meanFractalDimension')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Radius Error </label>
              <input className='form-input' type='text' {...register('radiusError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Texture Error</label>
              <input className='form-input' type='text' {...register('textureError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Perimeter Error</label>
              <input className='form-input' type='text' {...register('perimeterError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Area Error</label>
              <input className='form-input' type='text' {...register('areaError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Smoothness Error</label>
              <input className='form-input' type='text' {...register('smoothnessError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>CompactnessError</label>
              <input className='form-input' type='text' {...register('compactnessError')} />
            </div>

          </div>

          <div className='space-y-2'>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Concavity Error</label>
              <input className='form-input' type='text' {...register('concavityError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Concave Points Error</label>
              <input className='form-input' type='text' {...register('concavePointsError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Symmetry Error</label>
              <input className='form-input' type='text' {...register('symmetryError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Fractal Dimension Error</label>
              <input className='form-input' type='text' {...register('fractalDimensionError')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Radius</label>
              <input className='form-input' type='text' {...register('worstRadius')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Texture</label>
              <input className='form-input' type='text' {...register('worstTexture')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Perimeter</label>
              <input className='form-input' type='text' {...register('worstPerimeter')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Area</label>
              <input className='form-input' type='text' {...register('worstArea')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Smoothness</label>
              <input className='form-input' type='text' {...register('worstSmoothness')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Compactness</label>
              <input className='form-input' type='text' {...register('worstCompactness')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Concavity</label>
              <input className='form-input' type='text' {...register('worstConcavity')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Concave Points</label>
              <input className='form-input' type='text' {...register('worstConcavePoints')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Symmetry</label>
              <input className='form-input' type='text' {...register('worstSymmetry')} />
            </div>

            <div className='flex flex-col'>
              <label className='form-label' htmlFor=''>Worst Fractal Dimension</label>
              <input className='form-input' type='text' {...register('worstFractalDimension')} />
            </div>

          </div>
        </div>

        <button type='submit' className='bg-indigo-800 px-4 py-3 text-xl ml-60 text-white font-semibold rounded-lg mt-10 w-1/2'>
          Predict
        </button>
      </form>
    </div>
  )
}

export default BreastCancerForm
