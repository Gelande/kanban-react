import React, { useState } from "react";
import PropTypes from "prop-types";
import "./task-item.css";

export default function TaskItem({
  id,
  title,
  taskState,
  onTaskUpDate,
  onDeleteTask
}) {
  const [isEditing, setIsEditing] = useState(false);
  const [edTableTitle, setEdTableTitle] = useState(title);
  const onTitleChange = (event) => {
    const newTitle = event.target.value;
    setEdTableTitle(newTitle);
    onTaskUpDate(id, newTitle, taskState);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      setIsEditing(false);
      if (edTableTitle.length === 0) {
        onDeleteTask(id);
      }
    }
  };

  const onTaskStateChango = (event) => {
    onTaskUpDate(id, title, event.target.value);
  };

  if (isEditing) {
    return (
      <div className="task-item">
        <input
          type="text"
          value={edTableTitle}
          onChange={onTitleChange}
          onKeyPress={onKeyPress}
        />
      </div>
    );
  } else {
    return (
      <div className="task-item">
        <div onClick={(e) => setIsEditing(true)}>{edTableTitle}</div>
        <select onChange={onTaskStateChango} value={taskState}>
          <option value="Pendente">Pendente</option>
          <option value="Fazendo">Fazendo</option>
          <option value="Completa">Completa</option>
        </select>
      </div>
    );
  }
}

TaskItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  taskState: PropTypes.string.isRequired
};
