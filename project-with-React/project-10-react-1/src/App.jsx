import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";

export default function App() {
  const data = [
    {
      id: "242saa",
      title: "nyapu rumah",
      category: "pribadi",
      priority: "low",
      isDone: false,
    },

    {
      id: "dskk232",
      title: "instal software",
      category: "kerjaan",
      priority: "high",
      isDone: false,
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
      title: "Benerin printer",
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

  // ==================================================
  // --------------------------------------------------

  const [tasks, setTasks] = useState(data);

  return (
    <div className="container">
      <Header />
      <div className="main">
      <TaskForm />
      <TaskFilter />
      <TaskList dataTasks={tasks} />
      </div>
    </div>
  );
}
