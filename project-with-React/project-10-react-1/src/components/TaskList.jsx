import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { normalize } from "./utils";


export default function TaskList({ dataTasks, onDelete, onToggleDone , handleFilter, filter}) {
  if (filter.search.trim()) {
    dataTasks = dataTasks.filter(dt => normalize(dt.title).includes(normalize(filter.search)))
  }

  if (filter.filter !== "all") {
    dataTasks = dataTasks.filter(dt => (filter.filter === "done") ? dt.isDone : !dt.isDone)
  }



  return (
    <div className="taskListContainer">
      <h2 className="listHeader">Your Task</h2>
      <TaskFilter filter={filter} handleFilter={handleFilter}/>
      <div className="taskContainer">
        {dataTasks.map((t) => {
          return <TaskItem task={t} onDelete={onDelete} onToggleDone={onToggleDone}/>;
        })}
      </div>
    </div>
  );
}
