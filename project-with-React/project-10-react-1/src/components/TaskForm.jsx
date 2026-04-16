import { useState } from "react";
import generateId from "./idGenerator";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Kerjaan");
  const [priority, setPriority] = useState("Medium");

  function handleRadio(e) {
    setPriority(e.target.value);
  }
  
  function handleInputTask(e) {
    setTitle(e.target.value);
  }
  
  function handleCategory(e) {
    setCategory(e.target.value);
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    if (title.trim() === "") {
      alert("Data gagal di tambahkan: Title harus di isi!!!");
      return;
    }
    onAddTask({
      id: generateId(),
      title,
      category,
      priority,
      isDone: false,
    });
    setTitle("")
  }



  return (
    <>
      <form action="#" className="formInputTask" onSubmit={handleSubmit}>
        <h2>Input Task</h2>

        <div className="taskTitleContainer">
          <label htmlFor="taskTitle">Task title:</label>
          <input
            type="text"
            id="taskTitle"
            placeholder="Task name... "
            className="taskTitle"
            value={title}
            onChange={handleInputTask}
          />
        </div>

        <label htmlFor="kategory">Kategory:</label>
        <select
          name="kategory"
          id="kategory"
          className="kategory"
          value={category}
          onChange={handleCategory}
        >
          <option value="Kerjaan">Kerjaan</option>
          <option value="Pribadi">Pribadi</option>
          <option value="Belajar">Belajar</option>
        </select>

        <div className="radioWraper">
          <label>Priority:</label>
          <input
            checked={priority === "High"}
            type="radio"
            name="Priority"
            id="high"
            value="High"
            onChange={handleRadio}
          />
          <label htmlFor="high">High</label>

          <input
            checked={priority === "Medium"}
            type="radio"
            name="Priority"
            id="medium"
            value="Medium"
            onChange={handleRadio}
          />
          <label htmlFor="medium">Medium</label>

          <input
            checked={priority === "Low"}
            type="radio"
            name="Priority"
            id="low"
            value="Low"
            onChange={handleRadio}
          />
          <label htmlFor="low">Low</label>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
