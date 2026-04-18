export default function TaskFilter({filter,handleFilter}) {
  function handleRadioSort(e) {
    handleFilter({...filter,sort:e.target.value})
  } 

  return (
    <div className="searchAndFilter">
      <div className="searchInputContainer">
        <input value={filter.search} type="text" placeholder="Search" onChange={(e)=>{
          handleFilter({...filter,search:e.target.value})
        }}/>
      </div>

      <label htmlFor="filter" className="labelFilter">
        Filter:
      </label>
      <select value={filter.filter} onChange={(e)=>{
          handleFilter({...filter,filter:e.target.value})
        }}>
        <option value="all">All</option>
        <option value="done">Done</option>
        <option value="pending">Pending</option>
      </select>

      <label className="labelSort">Sort:</label>
      <input checked={filter.sort === "high"} type="radio" name="sortPriority" id="sortHigh" className="radioSort" onChange={handleRadioSort} value="high"/>
      <label htmlFor="sortHigh">High</label>
      <input checked={filter.sort === "low"} type="radio" name="sortPriority" id="sortLow" className="radioSort" onChange={handleRadioSort} value="low"/>
      <label htmlFor="sortLow">Low</label>
    </div>
  );
}

      {/* <input checked={filter.sort === "medium"} type="radio" name="sortPriority" id="sortMedium" className="radioSort" onChange={handleRadioSort} value="medium"/>
      <label htmlFor="sortMedium">Medium</label> */}