import React from "react";
import PropTypes from "prop-types";
import "./tasklist.css";
import plusIcon from "../../img/plus-icon.svg";

import TaskItem from "../TaskItem/TaskItem";

export default function TaskList({
  title,
  taskState,
  onAddTask,
  tasks,
  onTaskUpDate,
  onDeleteTask
}) {
  const addTask = () => {
    onAddTask("Nova tarefa", taskState);
  };
  return (
    <div className="tasklist">
      <span className="title">{title}</span>
      <div className="content">
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              id={task.id}
              title={task.title}
              taskState={task.state}
              onTaskUpDate={onTaskUpDate}
              onDeleteTask={onDeleteTask}
            />
          );
        })}
        {tasks.length === 0 && <div className="empty-list">Lista vazia</div>}
        <button onClick={addTask} className="btn">
          <img src={plusIcon} alt="plus" />
          Adicionar tarefa
        </button>
      </div>
    </div>
  );
}

TaskList.propTypes = {
  title: PropTypes.string.isRequired,
  onAddTask: PropTypes.func.isRequired,
  tasks: PropTypes.array.isRequired
};
