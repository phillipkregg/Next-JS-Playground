import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import { SetStateAction } from "react";
import { Dispatch } from "react";
import { ITask } from "./taskList";
import TaskInput from "./taskInput";

interface Props {
  isEditMode?: boolean;
  title: string;
  complete: boolean;
  setAllTasks: Dispatch<SetStateAction<ITask[]>>;
}

const TaskRow = ({ isEditMode, title, complete, setAllTasks }: Props) => {
  return (
    <>
      <li className="px-2 py-2 mb-4 overflow-auto text-lg text-gray-800 bg-blue-100 rounded-lg">
        {isEditMode ? (
          <div className="float-left w-2/3 ">
            <TaskInput setAllTasks={setAllTasks} />
          </div>
        ) : (
          <div className="float-left ">{title}</div>
        )}

        <div className="float-right ">
          <button
            type="button"
            className="p-1 mr-4 text-white bg-indigo-600 rounded-full shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            <PencilIcon className="w-5 h-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            className="p-1 mr-4 text-white bg-red-600 rounded-full shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600"
          >
            <TrashIcon className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>
      </li>
    </>
  );
};

export default TaskRow;
