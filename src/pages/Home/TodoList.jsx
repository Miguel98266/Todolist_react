import React, { Component } from "react";
import Form from "./Form";
import "./todolist.css";
import Card from "../../Shared/Card";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
      error: "",
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.agregarTask = this.agregarTask.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);
  }

  handleTaskChange(newTask) {
    // console.log(newTask)
    this.setState({ task: newTask });
    // this.setState({ errores: [...this.state.errores,'El campo no debe estar vacio'] });
  }

  agregarTask(e) {
    e.preventDefault();
    if (this.state.task === "") {
      console.log("Error");
      this.setState({ error: "El campo es requerido" });
    } else {
      this.setState({ task: "" });
      this.setState({ error: "" });
      console.log(this.state.tasks);
      this.setState({ tasks: [...this.state.tasks, this.state.task] });
    }
  }
  borrarTarea(removetask) {
    let newArray = this.state.tasks.filter((task) => {
      return task != removetask;
    });
    console.log(this.state.tasks);
    this.setState({ tasks: newArray });
  }

  validarTarea() {
    let isvalid = this.setState.tasks.some((task) => task == this.state.task);
    let isempty = this.state.task === "" ? true : false;
    let validation = true;
    if (isempty) {
      validation = false;
      console.log("Error");
      this.setState({ error: "El campo es requerido" });
    } else if (!isvalid) {
      validation = false;
      this.setState({ error: "Esta tarea ya esta escrita" });
    }
    return validation;
  }

  render() {
    return (
      <div className="App App-header">
        <div className="card">
          <h3 className="card-header">To do List</h3>
          <div className="card-body">
            <Form
              type="text"
              placeholderInput="Escribe una tarea"
              handleValue={this.handleTaskChange}
              nameError={this.state.error}
              handleAction={this.agregarTask}
              valueinput={this.state.task}
              labelButton="Agregar"
              styles="btn btn-primary mb-3"
            ></Form>
            {this.state.tasks.map((printTask, index) => (
              <Card
                key={index}
                item={printTask}
                handleAction={() => this.borrarTarea(printTask)}
                labelButton="Borrar"
                styles="btn btn-danger ms-5"
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}
