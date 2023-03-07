import TaskRow from "./taskRow";

const tasks = [
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
  return (
    <div className="px-5 py-10 my-8 rounded-lg bg-gray-50">
      <ul className="">
        {tasks.map((task) => (
          <TaskRow {...task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
