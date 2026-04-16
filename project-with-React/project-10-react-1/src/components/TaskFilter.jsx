export default function TaskFilter() {

  
  return (
    <form className="searchAndFilter">
      <div className="searchInputContainer">
        <input type="text" placeholder="Search" />
      </div>

      <label htmlFor="filter" className="labelFilter">
        Filter:
      </label>
      <select>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>

      <label className="labelSort">Sort:</label>
      <input type="radio" name="sortPriority" id="sortHigh" className="radioSort"/>
      <label htmlFor="sortHigh">High</label>
      <input type="radio" name="sortPriority" id="sortMedium" className="radioSort"/>
      <label htmlFor="sortMedium">Medium</label>
      <input type="radio" name="sortPriority" id="sortLow" className="radioSort"/>
      <label htmlFor="sortLow">Low</label>
    </form>
  );
}
