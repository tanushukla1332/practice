import React, { useState } from "react";

export default function Todo() {
  const [todo, setTodo] = useState();
  const [list, setList] = useState([]);

  function handleAdd() {
    setList([...list, todo]);
    setTodo("");
  }
  function HandleDelete(index) {
    const updatedSetList = [...list];
    updatedSetList.splice(index, 1);
    setList(updatedSetList);
  }
  function deleteAll() {
    setList([]);
  }

  return (
    <div className="Allconatiner">
      <h3>Todo Application</h3>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter todo data"
      />
      {list.map((todo, index) => {
        return (
          <div key={index}>
            <ul>
              <li>{todo}</li>
            </ul>
            <button onClick={() => HandleDelete(index)}>❌</button>
          </div>
        );
      })}

      <button onClick={handleAdd}>+</button>
      <br />
      <br />
      <div>
        {list.length >= 1 && <button onClick={deleteAll}>delete all</button>}
      </div>
    </div>
  );
}
