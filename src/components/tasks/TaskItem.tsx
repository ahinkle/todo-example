import { Task } from "@/types/Task.d";
import Input from "../ui/Input";
import { useEffect, useState } from "react";

interface TaskProps  {
  task: Task;
  handleTaskDelete: (id: string) => void;
  handleToggleTaskCompletion: (id: string) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, handleTaskDelete, handleToggleTaskCompletion }) => {
  const [css, setCss] = useState('opacity-0 translate-y-6')

  useEffect (() => {
    setTimeout(() => {
      task.completed
        ? setCss('opacity-50 translate-y-0')
        : setCss('opacity-100 translate-y-0')
    }, 100)
  }, [task])

  return (
    <div className={'flex flex-col w-full transform transition duration-300 ease-in-out ' + css}>
      <div className="relative flex items-start border-b py-3">
        <div className="flex w-full">
          <div className="flex h-6 items-center">
            <Input
              type="checkbox"
              name={`task-${task.id}`}
              id={`task-${task.id}`}
              className="h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
              label={task.task}
              hideLabel
              checked={task.completed}
              onChange={() => handleToggleTaskCompletion(task.id)}
              value={task.completed ? "true" : "false"}
            />
          </div>
          <div className="ml-3 text-sm leading-6">
            <label htmlFor="comments" className={'font-medium text-gray-900 ' + (task.completed ? 'line-through' : '')}>
              {task.task}
            </label>
          </div>
        </div>
        <a className="text-xs text-black flex items-center cursor-pointer hover:scale-125 transform transition duration-300 ease-in-out" onClick={() => handleTaskDelete(task.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="w-5 h-5" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5Zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6Z"/>
            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1ZM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118ZM2.5 3h11V2h-11v1Z"/>
          </svg>
        </a>
      </div>
    </div>
  )
};

export default TaskItem;
