import Tab from '@/components/navigation/Tab'
import Tabs from '@/components/navigation/Tabs'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="min-h-screen p-24 bg-gray-100">
      <h1 className="text-4xl font-bold text-center pb-5 text-indigo-800 uppercase">
        My Tasks
      </h1>
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <Tabs>
          <Tab label="All">

          </Tab>
          <Tab label="Remaining">
            <div className="flex flex-col">
              Hello!
            </div>
          </Tab>
          <Tab label="Completed">

          </Tab>
        </Tabs>
      </div>
    </main>
  )
}
