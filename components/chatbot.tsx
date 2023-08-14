'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ANSWERS, EXAMPLES, API_KEY_COHERE } from '../constants'

type Message = {
  id: string
  type: 'bot' | 'user'
  text: React.ReactNode
}

export const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      text: 'Hola soy un bot preparado para contestar algunas preguntas sobre Emiliano. Haceme tu pregunta.',
    },
  ])

  const [question, setQuestion] = useState<string>('')
  const [loading, setLoading] = useState<boolean>(false)
  const container = useRef<HTMLDivElement>(null)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (loading) return

    setLoading(true)
    setMessages(messages =>
      messages.concat({ id: String(Date.now()), type: 'user', text: question })
    )
    setQuestion('')

    const { classifications } = await fetch('https://api.cohere.ai/classify', {
      method: 'POST',
      headers: {
        Authorization: `BEARER ${API_KEY_COHERE}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'large',
        inputs: [question],
        examples: EXAMPLES,
      }),
    }).then(res => res.json())

    setMessages(messages =>
      messages.concat({
        id: String(Date.now()),
        type: 'bot',
        text:
          ANSWERS[classifications[0].prediction as keyof typeof ANSWERS] ||
          ANSWERS['unknown'],
      })
    )

    setLoading(false)
  }

  useEffect(() => {
    container.current?.scrollTo(0, container.current.scrollHeight)
  }, [messages])

  return (
    <main className="p-4">
      <div className="flex flex-col gap-4 m-auto border border-gray-400 p-4 rounded-md">
        <div
          ref={container}
          className="flex flex-col gap-4 h-[300px] overflow-y-auto pr-5"
        >
          {messages.map(message => (
            <div
              key={message.id}
              className={`p-4 max-w-[80%] rounded-3xl text-white ${
                message.type === 'bot'
                  ? 'bg-slate-500 text-left self-start rounded-bl-none'
                  : 'bg-blue-500 text-right self-end rounded-br-none'
              }`}
            >
              {message.text}
            </div>
          ))}
        </div>
        <div className="max-w-[100%]">
          <form className="flex items-center" onSubmit={handleSubmit}>
            <input
              value={question}
              onChange={event => setQuestion(event.target.value)}
              className="w-2/3 sm:w-3/4 rounded-lg rounded-r-none py-2 px-4 text-black border-solid border-2 border-black-600"
              placeholder="Quien sos?"
              type="text"
              name="question"
            />
            <button
              className={`w-1/3 sm:w-1/4 px-4 py-2 rounded-lg rounded-l-none bg-blue-500 border-solid border-2 border-black-600 text-white ${
                loading ? 'bg-blue-300' : 'bg-blue-500'
              }`}
              type="submit"
              disabled={loading || question === ''}
            >
              Enviar
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
