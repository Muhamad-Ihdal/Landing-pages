export default function TaskForm() {
  return (
    <>
      <form action="#" className="formInputTask">
        <h2>Input Task</h2>

        <div className="taskTitleContainer">
        <label htmlFor="taskTitle">Task title:</label>
        <input type="text" id="taskTitle" placeholder="Task name... " className="taskTitle"/>
        </div>

        <label htmlFor="kategory">Kategory:</label>
        <select name="kategory" id="kategory" className="kategory">
          <option value="Kerjaan">Kerjaan</option>
          <option value="Pribadi">Pribadi</option>
          <option value="Belajar">Belajar</option>
        </select>

        <div className="radioWraper">
          <label >Priority:</label>
          <input type="radio" name="Priority" id="high" value="high" />
          <label htmlFor="high">High</label>

          <input type="radio" name="Priority" id="medium" value="medium" />
          <label htmlFor="medium">Medium</label>

          <input type="radio" name="Priority" id="low" value="low" />
          <label htmlFor="low">Low</label>
        </div>

        <button type="submit">Add Task</button>
      </form>
    </>
  );
}
