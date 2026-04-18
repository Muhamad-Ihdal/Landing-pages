export default function TaskItem({ task, onDelete, onToggleDone }) {
  
  
  let backgroundColor;
  switch (task.priority) {
    case "high":
      backgroundColor = "redBackground";
      break;
    case "medium":
      backgroundColor = "orangeBackground";
      break;
    default:
      backgroundColor = "";
  }

  return (
    <div className="taskCard" >
      <div
        className={`status ${task.isDone ? "greenBackground" : "orangeBackground"}`}
        onClick={() => onToggleDone(task.id)}
      >
        {task.isDone ? "Done" : "Pending"}
      </div>

      <h3 className="taskContent">{task.title}</h3>

      <div className="cardFooter">
        <div className="cardDescription">
          <p>
            Priority: <span className={backgroundColor}>{task.priority}</span>
          </p>
          <p>Category: {task.category}</p>
        </div>
        <Action id={task.id} onDelete={onDelete} />
      </div>
    </div>
  );
}

function Action({ id, onDelete }) {
  return (
    <>
      <div className="action">
        <button
          className="deleteBtn redBackground"
          onClick={() => onDelete(id)}
        >
          Delete
        </button>
      </div>
    </>
  );
}
