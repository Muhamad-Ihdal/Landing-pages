export default function TaskItem({ task, onDelete, onToggleDone }) {
  return (
    <div className="taskCard" key={task.id}>
      <div
        className={`status ${task.isDone ? "greenBackground" : "orangeBackground"}`}
        onClick={()=> onToggleDone(task.id)}
      >
        {task.isDone ? "Done" : "Pending"}
      </div>

      <h3 className="taskContent">{task.title}</h3>

      <div className="cardFooter">
        <div className="cardDescription">
          <p>Priority: {task.priority}</p>
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
        <button className="deleteBtn redBackground" onClick={()=> onDelete(id)}>Delete</button>

      </div>
    </>
  );
}
