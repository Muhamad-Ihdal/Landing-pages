import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

const data = [
  {
    id: "2fs3w31a",
    title: "nyapu rumah dal a fdada dafa",
    category: "pribadi",
    priority: "low",
    isDone: false,
  },
  {
    id: "232dsadwq1a",
    title: "nyapu rumah dal a fdada dafa",
    category: "pribadi",
    priority: "high",
    isDone: false,
  },
  {
    id: "2fdafasdx1a",
    title: "nyapu rumah dal a fdada dafa",
    category: "pribadi",
    priority: "low",
    isDone: false,
  },
  {
    id: "2hdhgdhfva",
    title: "nyapu rumah dal a fdada dafa",
    category: "pribadi",
    priority: "high",
    isDone: false,
  },

  {
    id: "dskk232",
    title: "instal software",
    category: "kerjaan",
    priority: "high",
    isDone: true,
  },
  {
    id: "242saa",
    title: "Benerin printer",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
  {
    id: "2fafas",
    title: "Bersihin computer",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
  {
    id: "dfasdf3",
    title: "Benerin printer dan jua lagi main fadfadf sdfadf dafa",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
  {
    id: "24fsasss",
    title: "Benerin printer",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
  {
    id: "fsdf32",
    title: "Benerin printer",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
  {
    id: "24fdsfa",
    title: "Benerin printer",
    category: "kerjaan",
    priority: "medium",
    isDone: false,
  },
];

const defaultFilter = {
  search: "",
  filter: "all",
  sort: "high",
};



export default function App() {
  const [tasks, setTasks] = useState(data);
  const [filter, setFilter] = useState(defaultFilter);

  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  function handleDelete(id) {
    setTasks(tasks.filter((t) => t.id !== id));
  }

  function handleToggleDone(id) {
    setTasks(
      tasks.map((t) => {
        if (t.id !== id) return t;
        return { ...t, isDone: !t.isDone };
      }),
    );
  }

  function handleFilter(newFilter) {
    setFilter(newFilter)
    console.log(newFilter)
  }

  return (
    <div className="container">
      <Header tasks={tasks} />
      <div className="main">
        <TaskForm onAddTask={handleAddTask} />
        <TaskList
          dataTasks={tasks}
          onDelete={handleDelete}
          onToggleDone={handleToggleDone}
          handleFilter={handleFilter}
          filter={filter}
        />
      </div>
    </div>
  );
}
