import Head from "next/head"
import { useState } from "react"
import { DashLayout } from "../layouts"

type Message = {
  key: number,
  text: any
}
const SymptomChecker = () => {

  const [input, setInput] = useState('')
  const [message, setMessage] = useState<Message>()

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      alert('hello')
      fetchData()
    }
  }

  const fetchData = async () => {

    const response = await fetch('/api/generate-answer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        prompt: input
      })
    })
    const data = await response.json()

    if (data.text) {
      const botMessage = {
        text: data.text,
        key: Date.now()
      }
      setMessage(botMessage)
    } else {
      console.log('Error occured')
    }
  }

  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div className='m-6'>
          <h2 className='text-3xl font-bold text-purple-800'>Symptom Checker</h2>

          <div>
            <h2 className='text-xl my-3'>Enter your symptoms</h2>

            <div>
              <input
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => setInput(e.target.value)}
                className='px-4 py-3 w-1/2 focus:outline-none rounded-lg border border-purple-300' type="text" />
            </div>

            <div className='bg-purple-50 mt-4 h-[16rem]'>
              <p className='p-4 text-lg font-semibold text-purple-900'>{message?.text.text}</p>

            </div>
          </div>
        </div>
      </DashLayout>
    </div>
  )
}

export default SymptomChecker
