import { useState } from "react";
import { generateId } from "./utils";

export default function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("kerjaan");
  const [priority, setPriority] = useState("medium");

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
          <option value="kerjaan">Kerjaan</option>
          <option value="pribadi">Pribadi</option>
          <option value="belajar">Belajar</option>
        </select>

        <div className="radioWraper">
          <label>Priority:</label>
          <input
            checked={priority === "high"}
            type="radio"
            name="Priority"
            id="high"
            value="high" 
            onChange={handleRadio}
          />
          <label htmlFor="high">High</label>

          <input
            checked={priority === "medium"}
            type="radio"
            name="Priority"
            id="medium"
            value="medium"
            onChange={handleRadio}
          />
          <label htmlFor="medium">Medium</label>

          <input
            checked={priority === "low"}
            type="radio"
            name="Priority"
            id="low"
            value="low"
            onChange={handleRadio}
          />
          <label htmlFor="low">Low</label>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}