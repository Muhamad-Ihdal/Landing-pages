import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { normalize } from "./utils";


export default function TaskList({ dataTasks, onDelete, onToggleDone , handleFilter, filter}) {
  let data = [...dataTasks]

  let weight = {
    high:3,
    medium:2,
    low:1,
  }

  if (filter.search.trim()) {
    data = data.filter(dt => normalize(dt.title).includes(normalize(filter.search)))
  }

  if (filter.filter !== "all") {
    data = data.filter(dt => (filter.filter === "done") ? dt.isDone : !dt.isDone)
  }

  console.log(filter.sort !== "")
  if (filter.sort !== "") {
    data = data.sort((a,b)=>{
      const sort1 = a.priority.toLowerCase()
      const sort2 = b.priority.toLowerCase()

      let hasilBobot;
      if (filter.sort === 'low') {
        hasilBobot = weight[sort1] - weight[sort2]
      } else {
        hasilBobot = weight[sort2] - weight[sort1]
      }

      if (hasilBobot !== 0) {
        return hasilBobot
      }
      return a.title.localeCompare(b.title)
    })
  }

  return (
    <div className="taskListContainer">
      <h2 className="listHeader">Your Task</h2>
      <TaskFilter filter={filter} handleFilter={handleFilter}/>
      <div className="taskContainer">
        {data.map((t) => {
          return <TaskItem key={t.id} task={t} onDelete={onDelete} onToggleDone={onToggleDone} />;
        })}
      </div>
    </div>
  );
}
