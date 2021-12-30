import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Kitap oku", status: false },
  { id: 2, title: "Temizlik yap", status: false },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTask, setNewTask] = useState("");

  return (
    <div className="App">
      <h1>React To-Do List App</h1>

      <div className="addForm">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add list"
        />
        <button
          onClick={() => {
            setList([
              ...list,
              { id: Date.now(), title: newTask, status: false },
            ]);
            setNewTask("");
          }}
        >
          Add
        </button>
      </div>

      <div className="list">
        {list.map((item, index) => (
          <div
            key={index}
            onClick={() => {
              setList(
                list.map((el) =>
                  el.id === item.id ? { ...el, status: !el.status } : el.status
                )
              );
            }}
            className={item.status ? "completed" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>

      <button
        onClick={() => setList(list.filter((item) => !item.status))}
        className="clear"
      >
        Clear completed
      </button>
    </div>
  );
}
