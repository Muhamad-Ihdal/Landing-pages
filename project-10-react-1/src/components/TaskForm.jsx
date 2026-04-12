export default function TaskForm() {
  return (
    <>
      <form action="#">
        <label htmlFor="taskTitle">Task title:</label>
        <input type="text" id="taskTitle" />

        <label htmlFor="kategory">Kategory:</label>
        <select name="kategory" id="kategory">
          <option value="Kerjaan">Kerjaan</option>
          <option value="Pribadi">Pribadi</option>
          <option value="Belajar">Belajar</option>
        </select>

        <div className="radioWraper">
          <input type="radio" name="Priority" id="hight" value="hight" />
          <label htmlFor="hight">Hight</label>

          <input type="radio" name="Priority" id="medium" value="medium" />
          <label htmlFor="medium">Medium</label>

          <input type="radio" name="Priority" id="low" value="low" />
          <label htmlFor="low">Low</label>
        </div>
      </form>
    </>
  );
}
