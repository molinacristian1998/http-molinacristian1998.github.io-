import React, { useState, useReducer } from "react";
import AddTask from "./AddTask";
import AllTasks from "./AllTasks";
import "./master.min.css";

// Se setea la fecha en NOMBREMES DD, AAAA
var d = new Date();
var months = ["Enero", "Febr", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Sept", "Oct", "Nov", "Dic"];
var date = `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

const useTasks = (tasks) => {
  const [task, setTask] = useState(tasks);

  const addTask = (event) => {
    let var_title = event.target.querySelectorAll("input")[0].value;
    let var_description = event.target.querySelectorAll("textarea")[0].value;
    if (!var_description) {var_description = "";}
    if (!var_title) {var_title = "";}

    event.target.querySelectorAll("input")[0].value = "";
    event.target.querySelectorAll("textarea")[0].value = "";
    document.body.classList.remove("toggle");
    var newvar = {
      id: task.length + 10,
      title: var_title,
      description: var_description,
      completed: false,
    };

    let concat = task.concat(newvar);

    setTask(concat);

    
    
    
    event.preventDefault();
  };

  return { task, addTask };
};

function App() {
  const initialState = {
    folder: "Mis Tareas",
  };

  var localTask = JSON.parse(localStorage.getItem("tasks"));

  // se pasa el valor de initialstate a task
  const { task, addTask } = useTasks(localTask);

  var completed_tasks = Object.values(task).filter((x) => x.completed === true);
  var remaining_tasks = Object.values(task).filter((x) => x.completed === false);
  var percent = parseInt((completed_tasks.length / task.length) * 100);

  //localStorage.clear();

  localStorage.setItem("tasks", JSON.stringify(task));

  console.log(localTask);

  return (
    <div className="app">
      <button className="add">
        <img onClick={() => document.body.classList.add("toggle")} src="../add-24px.svg" />
      </button>

      <div className="header">
        <img src="../sort-24px.svg" />

        <h1>{initialState.folder}</h1>

        <p className="date">{date}</p>

        <div className="info">
          <div>
            <h2>{task.length}</h2>
            <p>Tareas</p>
          </div>
          <div>
            <h2>{completed_tasks.length}</h2>
            <p>Completadas</p>
          </div>

          <p className="percent">{percent}% hecho</p>
        </div>
      </div>

      <AddTask onSubmit={(e) => addTask(e)} />
      
      {localTask ? <AllTasks completed={completed_tasks} remaining={remaining_tasks} /> : "no hay tareas"}
      
      
    </div>
  );
}

export default App;
