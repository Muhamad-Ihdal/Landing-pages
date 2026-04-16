import TaskItem from "./TaskItem";

export default function TaskList({ dataTasks }) {
  return (
    <>
      <h2>ini tugas container</h2>
      <div className="taskContainer">
        {dataTasks.map((t) => {
          return <TaskItem task={t} />;
        })}
      </div>
    </>
  );
}
