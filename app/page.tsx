import Image from 'next/image'
import { auth } from '@clerk/nextjs'
require('dotenv').config()


export default async function Home() {
  const {userId} = await auth()
  let href = userId ? '/journal' : '/new-user'

  return (
    <div className="w-screen h-screen bg-black flex justify-center items-center text-white">
      <div className="w-full max-w-[600px] mx-auto">
        <h1 className="text-6xl mb-4">The best journal app that exists</h1>
        <p className="text-2xl text-white/60 mb-4">
          This is the best app, to take your journaling to the next level. Start
          today!
        </p>
        <div>
          <a href={href}>
            <button className="bg-green-600 p-3 rounded-md">get started</button>
          </a>
        </div>
      </div>
    </div>
  )
}
