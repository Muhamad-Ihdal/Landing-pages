import { useState } from "react";
import Header from "./components/Header";
import TaskForm from "./components/TaskForm";

export default function App() {
  const [tasks,setTasks] = useState([]);


  return (
    <div className="container">
      <Header/>
      <TaskForm/>
    </div>
  )
}

 
