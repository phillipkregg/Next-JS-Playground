"use client";

import { useEffect, useState } from "react";
import { Dispatch, SetStateAction } from "react";
import type { ITask } from "./taskList";

const TaskInput = ({
  setAllTasks,
  setDisabled,
}: {
  setAllTasks: Dispatch<SetStateAction<Array<ITask>>>;
  setDisabled: Dispatch<SetStateAction<boolean>>;
}) => {
  const [inputVal, setInputVal] = useState<string>("");

  useEffect(() => {
    setDisabled(true);
  }, [inputVal, setDisabled]);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      setAllTasks((oldTasks) => [
        { title: inputVal, complete: false, isEditMode: false },
        ...oldTasks.slice(1),
      ]);
      setDisabled(false);
    }
  };
  return (
    <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm  ">
      <input
        autoFocus
        value={inputVal}
        type="text"
        name="name"
        id="name"
        className="block w-full px-2 py-2 text-gray-900 border-0 rounded-md placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Enter Task Name"
        onKeyUp={handleKeyPress}
        onChange={(e) => setInputVal(e.target.value)}
      />
    </div>
  );
};

export default TaskInput;
