import CreateTaskForm from '@/components/forms/CreateTaskForm'
import Tab from '@/components/navigation/Tab'
import Tabs from '@/components/navigation/Tabs'
import TaskList from '@/components/tasks/TaskList'
import { Task } from '@/types/Task.d'
import { createOrUpdateTask, deleteTask, retrieveTasks, toggleTaskCompletion } from '@/utils/tasks'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setTasks(retrieveTasks())
  }, [])

  const refreshTasks = () => {
    setTasks(retrieveTasks())
  }

  return (
    <main className="min-h-screen p-24 bg-gray-100">

      <h1 className="text-4xl lg:text-6xl text-center pb-5 uppercase bg-clip-text bg-gradient-to-r from-indigo-300 to-indigo-800 font-extrabold text-transparent">
        My TODOs
      </h1>

      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm mx-auto">

        <div className="flex flex-col lg:flex-row items-center justify-between">
          <CreateTaskForm onSubmit={(task: Task) => {
              createOrUpdateTask(task)
              refreshTasks()
            }}
          />
        </div>

        <Tabs>
          <Tab label="All">
            <TaskList
              name="All Tasks"
              tasks={tasks}
              handleTaskDelete={(id: string) => {
                deleteTask(id)
                refreshTasks()
              }}
              handleToggleTaskCompletion={(id: string) => {
                toggleTaskCompletion(id)
                refreshTasks()
              }}
            />
          </Tab>
          <Tab label="Remaining">
            <div className="flex flex-col">

            </div>
          </Tab>
          <Tab label="Completed">

          </Tab>
        </Tabs>

      </div>
    </main>
  )
}
