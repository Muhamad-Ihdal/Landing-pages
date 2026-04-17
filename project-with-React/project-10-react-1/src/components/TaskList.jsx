import TaskItem from "./TaskItem";
import TaskFilter from "./TaskFilter";
import { normalize } from "./utils";
import { Linter } from "eslint";


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
      const sort1 = normalize(a.priority)
      const sort2 = normalize(b.priority)

      let hasilBobot;
      if (filter.sort === 'low') {
        hasilBobot = weight[sort1] - weight[sort2]
      } else if (filter.sort === 'medium') {
        const getMediumWeight = (x)=>(x === "medium" ? 4 : weight[x])
        hasilBobot = getMediumWeight(sort2) - getMediumWeight(sort1)
        
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
          return <TaskItem task={t} onDelete={onDelete} onToggleDone={onToggleDone}/>;
        })}
      </div>
    </div>
  );
}
