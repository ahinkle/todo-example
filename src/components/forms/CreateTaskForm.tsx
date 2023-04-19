import { Task } from "@/types/Task.d";
import Input from "../ui/Input";
import { useState } from "react";
import Button from "../ui/Button";

interface CreateTaskFormProps {
  onSubmit: (task: Task) => void;
}

const CreateTaskForm: React.FC<CreateTaskFormProps> = ({ onSubmit }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    onSubmit({
      task,
      id: Math.random().toString(36).substring(2, 9),
      completed: false,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    setTask("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full">
      <div className="w-4/5">
        <Input
          id="task"
          label="Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          required
          hideLabel
          autoFocus
          placeholder="Add a new task"
        />
      </div>
      <div className="w-1/5 self-center px-1">
        <Button type="submit">Add</Button>
      </div>
    </form>
  );
};

export default CreateTaskForm;
