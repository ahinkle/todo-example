import { Task } from "@/types/Task.d";
import TaskItem from "./TaskItem";

interface TaskListProps  {
  name: string;
  tasks: Task[];
  handleTaskDelete: (id: string) => void;
  handleToggleTaskCompletion: (id: string) => void;
}

const TaskList: React.FC<TaskListProps> = ({ name, tasks, handleTaskDelete, handleToggleTaskCompletion }) => {
  return (
    <fieldset className="flex flex-col bg-white rounded-lg px-4 pt-4 border">
      <legend className="sr-only">{name}</legend>
      {tasks.map((item) => (
        <TaskItem
          key={item.id}
          task={item}
          handleTaskDelete={handleTaskDelete}
          handleToggleTaskCompletion={handleToggleTaskCompletion}
        />
      ))}
    </fieldset>
  )
};

export default TaskList;
