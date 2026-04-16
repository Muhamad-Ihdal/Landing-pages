import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";


  const data = [
    {
      id: "242saa",
      title: "nyapu rumah dal a fdada dafa",
      category: "Pribadi",
      priority: "Low",
      isDone: false,
    },

    {
      id: "dskk232",
      title: "instal software",
      category: "Kerjaan",
      priority: "High",
      isDone: true,
    },
    {
      id: "242saa",
      title: "Benerin printer",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
    {
      id: "2fafas",
      title: "Bersihin computer",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
    {
      id: "dfasdf3",
      title: "Benerin printer dan jua lagi main fadfadf sdfadf dafa",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
    {
      id: "24fsasss",
      title: "Benerin printer",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
    {
      id: "fsdf32",
      title: "Benerin printer",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
    {
      id: "24fdsfa",
      title: "Benerin printer",
      category: "Kerjaan",
      priority: "Medium",
      isDone: false,
    },
  ];













export default function App() {
  const [tasks, setTasks] = useState(data);

  function handleAddTask(newTask) {
    setTasks([...tasks,newTask])
  }

  return (
    <div className="container">
      <Header />
      <div className="main">
      <TaskForm onAddTask={handleAddTask}/>
      <TaskList dataTasks={tasks} />
      </div>
    </div>
  );
}
