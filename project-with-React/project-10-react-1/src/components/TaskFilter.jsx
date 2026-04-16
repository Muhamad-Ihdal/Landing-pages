export default function TaskFilter() {
  return (
    <form className="searchAndFilter">
      <input type="text" placeholder="Search" />

      <label htmlFor="filter">Filter:</label>
      <select>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>


      <input type="radio" name="sortPriority" id="sortHigh" />
      <label htmlFor="sortHigh">High</label>
      <input type="radio" name="sortPriority" id="sortMedium" />
      <label htmlFor="sortMedium">Medium</label>
      <input type="radio" name="sortPriority" id="sortLow" />
      <label htmlFor="sortLow">Low</label>
      
    </form>
  );
}
