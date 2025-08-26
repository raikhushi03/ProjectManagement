import { useState } from "react";

export default function NewTask({ onAdd }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!enteredTask.trim()) return;

    onAdd(enteredTask);   // 🔴 calls up to App.jsx → handleAddTask
    setEnteredTask("");   // reset input
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={enteredTask}
        onChange={(e) => setEnteredTask(e.target.value)}
        className="px-2 py-1 border rounded w-full"
        placeholder="Enter a task"
      />
      <button
        type="submit"
        className="px-3 py-1 bg-stone-700 text-white rounded hover:bg-stone-800"
      >
      Add Task
      </button>
    </form>
  );
}
