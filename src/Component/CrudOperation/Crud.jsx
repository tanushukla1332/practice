import React, { useState } from "react";

export default function Crud() {
  const [activity, setActivity] = useState("");
  const [list, setList] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  function handleAdd() {
    if (editIndex !== -1) {
      const updatedList = list.map((item, i) =>
        i === editIndex ? activity : item
      );
      setList(updatedList);
      setActivity("");
      setEditIndex(-1);
    } else {
      setList([...list, activity]);
      setActivity("");
    }
  }

  function handleDelete(i) {
    const newlist = list.filter((item, id) => i !== id);
    setList(newlist);
  }

  function handleUpdate(i) {
    setActivity(list[i]);
    setEditIndex(i);
  }

  return (
    <div className="Container">
      <h1 className="heading">Todo app</h1>
      {list.map((item, i) => {
        return (
          <div key={i} className="map-start">
            <ul className="ul-list-item">
              <li className="list-item">{item}</li>
            </ul>
            <button onClick={() => handleDelete(i)} className="delete">❌</button>
            <button onClick={() => handleUpdate(i)} className="update" >🎁</button>
          </div>
        );
      })}
      <input
        type="text"
        placeholder="✍add item..."
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
        className="input-field"
      />
      <button onClick={handleAdd} className="add">{editIndex !== -1 ? "👆" : "➕"}</button>
    </div>
  );
}
