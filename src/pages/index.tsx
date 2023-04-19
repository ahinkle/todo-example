import CreateTaskForm from '@/components/forms/CreateTaskForm'
import Tab from '@/components/navigation/Tab'
import Tabs from '@/components/navigation/Tabs'
import TaskList from '@/components/tasks/TaskList'
import { Task } from '@/types/Task.d'
import { createOrUpdateTask, deleteTask, retrieveTasks, toggleTaskCompletion } from '@/utils/tasks'
import { useEffect, useState } from 'react'

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([])

  useEffect(() => {
    setTasks(retrieveTasks())
  }, [])

  const refreshTasks = () => {
    setTasks(retrieveTasks())
  }

  return (
    <main className="min-h-screen p-4 lg:p-24 bg-gray-100">
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

        {tasks.length > 0 && (
          <Tabs>
            <Tab label="All">
              <TaskList
                name="Tasks"
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
                <TaskList
                  name="Remaining Tasks"
                  tasks={tasks.filter((task) => !task.completed)}
                  handleTaskDelete={(id: string) => {
                    deleteTask(id)
                    refreshTasks()
                  }}
                  handleToggleTaskCompletion={(id: string) => {
                    toggleTaskCompletion(id)
                    refreshTasks()
                  }}
                />
              </div>
            </Tab>
            <Tab label="Completed">
              <TaskList
                name="Completed Tasks"
                tasks={tasks.filter((task) => task.completed)}
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
          </Tabs>
        )}
      </div>
    </main>
  )
}
