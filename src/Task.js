import React, { useState } from "react";

function Task(props) {
  return (
    <div id={props.id} className="Task">
      <img
        onClick={(e) => console.log(e)}
        className={props.info.completed ? "completed" : ""}
        src={props.info.completed ? "../radio_button_checked-24px.svg" : "../radio_button_unchecked-24px.svg"}
      />
      <div>
        <h1>{props.info.title}</h1>
        <p>{props.info.description}</p>
      </div>
    </div>
  );
}

export default Task;
