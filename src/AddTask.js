import React, { useState } from "react";

function AddTask({ onSubmit, title }) {
  return (
    <form className="addNew" onSubmit={onSubmit}>
      <div className="navbar">
        <img onClick={() => document.body.classList.remove("toggle")} src="../arrow_back-24px.svg" />
        <h1>Agregar tarea</h1>
        <img src="../tune-24px.svg" />
      </div>

      <img className="main" src="../create-24px.svg" />

      <input onChange={(e) => (title = e.target.value)} type="text" placeholder="Título"></input>
      <textarea id="form-description" placeholder="Descripción"></textarea>
      <input type="submit" id="cuack" value="Agregar Tarea"></input>
    </form>
  );
}

export default AddTask;
