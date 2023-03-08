"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { useEffect, useState } from "react";
import TaskRow from "./taskRow";

export interface ITask {
  title: string;
  complete: boolean;
  isEditMode?: boolean;
}

const mockTasks: ITask[] = [
  {
    title: "My first task",
    complete: false,
  },
  {
    title: "Another task",
    complete: false,
  },
  {
    title: "Get Groceries",
    complete: false,
  },
  {
    title: "Workout!",
    complete: false,
  },
  {
    title: "Get stuff done",
    complete: false,
  },
];

const TaskList = () => {
  const [singleTask, setSingleTask] = useState<ITask>({
    title: "",
    complete: false,
    isEditMode: true,
  });
  const [tasks, setTasks] = useState<ITask[]>(mockTasks);

  useEffect(() => {
    debugger;
  }, [singleTask]);

  const addNewTask = () => setTasks([singleTask, ...tasks]);

  return (
    <div className="px-5 py-10 my-8 rounded-lg bg-gray-50">
      <div className="mb-8">
        <button
          onClick={addNewTask}
          type="button"
          className="inline-flex items-center gap-x-2 rounded-md bg-indigo-600 py-2.5 px-3.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Task
          <PlusIcon className="-mr-0.5 h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      <ul className="">
        {tasks.map((task, idx) => (
          <TaskRow key={idx} {...task} setAllTasks={setTasks} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
