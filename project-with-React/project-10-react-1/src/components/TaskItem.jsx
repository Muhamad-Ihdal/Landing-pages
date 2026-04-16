export default function TaskItem({task}) {
  return (
    <div className="taskCard" key={task.id}>
      <div
        className={`status ${task.isDone ? "greenBackground" : "orangeBackground"}`}
      >
        {task.isDone ? "Done":"Pending" }
      </div>

      <h3>
        {task.title}
      </h3>

      <div className="cardFooter">
        <p>Priority: {task.priority}</p>
        <Action done={task.isDone}/>
      </div>
    </div>
  );
}

function Action({done}) {


  return (
    <>
      <form className="action" >
        <button className="doneBtn" disabled={done}>
          Done
        </button>
        <button className="deleteBtn">Delete</button>
      </form>
    </>
  );
}

