import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";


export default function TaskList({ dataTasks }) {
  return (
    <div className="taskListContainer">
      <h2 className="listHeader">Your Task</h2>
      <TaskFilter />
      <div className="taskContainer">
        {dataTasks.map((t) => {
          return <TaskItem task={t} />;
        })}
      </div>
    </div>
  );
}
