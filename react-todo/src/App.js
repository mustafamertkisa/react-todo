import React, { useState } from "react";

const INITIAL_STATE = [
  { id: 1, title: "Kitap oku", status: false },
  { id: 2, title: "Temizlik yap", status: true },
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);

  return (
    <div className="App">
      <h1>React To-Do List App</h1>

      <div className="addForm">
        <input placeholder="Add list" />
        <button>Add</button>
      </div>

      <div className="list">
        {list.map((item) => (
          <div
            onClick={() => {
              setList(
                list.map((element) =>
                  element.id === item.id
                    ? { ...element, status: !element.status }
                    : element.status
                )
              );
            }}
            className={item.status ? "completed" : ""}
          >
            {item.title}
          </div>
        ))}
      </div>
    </div>
  );
}
