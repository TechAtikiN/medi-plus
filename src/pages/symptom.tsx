import Head from 'next/head'
import useState from 'react-usestateref'
import { DashLayout } from '../layouts'

type Message = {
  key: number,
  text: any,
  msgByBot: boolean
}
const SymptomChecker = () => {

  const [input, setInput] = useState('')
  const [messages, setMessages, messagesRef] = useState<Message[]>([])
  const [loading, setLoading] = useState(false)
  const [messageByBot, setMessageByBot] = useState(false)

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) {
      alert('hello')
      fetchData()
    }
  }

  const fetchData = async () => {

    setLoading(true)
    const myMessage = {
      text: input,
      key: new Date().getTime(),
      msgByBot: false
    }
    setMessages(messages => [...messages, myMessage])
    setMessages([...messagesRef.current, myMessage])

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
    setLoading(false)

    if (data.text) {
      const botMessage = {
        text: data.text,
        key: Date.now(),
        msgByBot: true
      }
      setMessages([...messagesRef.current, botMessage])
      setMessageByBot(true)
    } else {
      console.log('Error occured')
    }
  }

  console.log(messages)
  return (
    <div className=''>
      <Head>
        <title>MediPlus | Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashLayout>
        <div className='m-5'>
          <h2 className='text-3xl font-bold text-violet-800'>Symptom Checker</h2>

          <div>
            <h2 className='text-xl my-3'>Enter your symptoms</h2>

            <div className='mt-4 flex flex-col h-[30rem] w-full overflow-y-scroll'>
              <p className='bg-violet-700 p-4 rounded-r-3xl rounded-b-3xl font-semibold text-sm mr-10 mt-7 ml-4 text-white'>
                Welcome to our site! If you need any help or check symptoms, we are online and ready to help you!
              </p>
              
              <div className='h-64 md:h-96 overflow-y-scroll'>
              <div className='flex flex-col-reverse'>
              {messages?.map(msg => (
                  msg.msgByBot ? (
                    <p
                      key={msg.key}
                      className={`bg-purple-800 p-4 rounded-r-3xl rounded-b-3xl font-semibold text-lg mr-10 mt-7 ml-4 text-white`}
                    >{msg.text.text}
                    </p>
                  ) : (
                    <p
                      key={msg.key}
                      className={`bg-gray-200 p-4 rounded-l-3xl rounded-b-3xl font-semibold text-sm mr-10 mt-5 ml-4 text-black`}
                    >{msg.text}
                    </p>
                  )
                  // <p
                  //   key={msg.key}
                  //   className={`bg-purple-800 p-4 ${msg.msgByBot ? 'rounded-r-3xl rounded-b-3xl' : 'rounded-l-3xl rounded-b-3xl'} font-semibold text-lg mr-10 mt-7 ml-4 text-white`}
                  // >{msg.text.text}
                  // </p>
                ))}

        
            </div>
            <div className='flex-none md:w-auto bottom-20 fixed w-full'>
              <input
                onKeyDown={(e) => handleKeyDown(e)}
                onChange={(e) => setInput(e.target.value)}
                className='px-4 w-full py-3 focus:outline-none rounded-lg border border-purple-800' 
                type='text' 
                placeholder='Type here...' 
              />
            </div>

            </div>
            
          </div>
        </div>
        </div>
      </DashLayout>
    </div>
  )
}

export default SymptomChecker
