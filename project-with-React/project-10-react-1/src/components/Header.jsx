export default function Header({tasks}) {
  const allTask = tasks.length
  const taskDone = tasks.filter(t=> t.isDone === true).length
  
  
  return (
    <>
      <header>
        <h1>Task Manager App</h1>
        <p>Task done: {taskDone} ({!allTask ? 0 : Math.round((taskDone/allTask) * 100)}%)</p>
      </header>
    </>
  );
}
