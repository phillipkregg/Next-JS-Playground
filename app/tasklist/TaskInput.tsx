const TaskInput = ({ title }) => {
  return (
    <div className="rounded-md px-3 pt-2.5 pb-1.5 shadow-sm  ">
      <input
        value={title}
        type="text"
        name="name"
        id="name"
        className="block w-full px-2 py-2 text-gray-900 border-0 rounded-md placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        placeholder="Enter Task Name"
      />
    </div>
  );
};

export default TaskInput;
