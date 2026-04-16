export default function TaskItem({ task }) {
  return (
    <div className="taskCard" key={task.id}>
      <div
        className={`status ${task.isDone ? "greenBackground" : "orangeBackground"}`}
      >
        {task.isDone ? "Done" : "Pending"}
      </div>

      <h3 className="taskContent">{task.title}</h3>

      <div className="cardFooter">
        <div className="cardDescription">
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>
        </div>
        <Action done={task.isDone} />
      </div>
    </div>
  );
}

function Action({ done }) {
  return (
    <>
      <div className="action">
        <button className="deleteBtn redBackground">Delete</button>

      </div>
    </>
  );
}
