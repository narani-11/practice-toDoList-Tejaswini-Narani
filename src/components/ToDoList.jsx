function ToDoList() {
  // Step 1: Create a static array of tasks
  const tasks = ["Learn React", "Build a project", "Read documentation"];

  // Step 2: Return a list of tasks
  return (
    <div className="todo-list">
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
