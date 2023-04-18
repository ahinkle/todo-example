import { Task } from "@/types/Task.d"

/**
 * Creates or updates a task in local storage.
 *
 * @param task  The task to create or update.
 * @returns     void
 */
export function createOrUpdateTask(task: Task): void {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')
  const taskIndex = tasks.findIndex(t => t.id === task.id)

  // If the task exists, update it, otherwise create it.
  taskIndex >= 0
    ? tasks[taskIndex] = task
    : tasks.push(task)

  localStorage.setItem('tasks', JSON.stringify(tasks))
}

/**
 * Deletes a task from local storage.
 *
 * @param id  The ID of the task to delete.
 * @returns   void
 * @throws    Error if the task does not exist.
 */
export function deleteTask(id: string): void {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')
  const taskIndex = tasks.findIndex(t => t.id === id)

  if (taskIndex < 0) {
    throw new Error(`Task with ID ${id} does not exist.`)
  }

  tasks.splice(taskIndex, 1)
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

/**
 * Retrieves all tasks from local storage.
 *
 * @returns  An array of tasks.
 * @throws   Error if the tasks cannot be parsed.
 */
export function retrieveTasks(): Task[] {
  const tasks = JSON.parse(localStorage.getItem('tasks') ?? '[]')

  if (!Array.isArray(tasks)) {
    throw new Error('Tasks could not be parsed.')
  }

  // Sorting by the most recently updated task.
  tasks.sort((a: Task, b: Task) => {
    return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  })

  return tasks
}

/**
 * Toggles the completion status of a task.
 *
 * @param id  The ID of the task to toggle.
 * @returns   void
 * @throws    Error if the task does not exist.
 */
export function toggleTaskCompletion(id: string): void {
  const tasks: Task[] = JSON.parse(localStorage.getItem('tasks') ?? '[]')
  const taskIndex = tasks.findIndex(t => t.id === id)

  if (taskIndex < 0) {
    throw new Error(`Task with ID ${id} does not exist.`)
  }

  tasks[taskIndex].completed = !tasks[taskIndex].completed
  localStorage.setItem('tasks', JSON.stringify(tasks))
}
