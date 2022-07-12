import React, { Component } from "react";
import Button from "../../Shared/Button";
import InputValue from "../../Shared/InputValue";
import "./todolist.css";

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      task: "",
      tasks: [],
    };
    this.handleTaskChange = this.handleTaskChange.bind(this);
    this.agregarTask = this.agregarTask.bind(this);
    this.borrarTarea = this.borrarTarea.bind(this);
  }

  handleTaskChange(newTask) {
    this.setState({ task: newTask });
  }

  agregarTask(e) {
    e.preventDefault();
    console.log(this.state.task);
    this.setState({ tasks: [...this.state.tasks, this.state.task] });
  }
  borrarTarea(index) {
    this.state.tasks.splice(index, 1);
    console.log(this.state.tasks);
    this.setState({ tasks: [...this.state.tasks] });
  }
  render() {
    return (
      <div className="App App-header">
        <div className="card">
          <h3 className="card-header">To do List</h3>
          <div className="card-body">
            <form className="row ">
              <div className="col-9">
                <InputValue
                  type="text"
                  placeholder="Escibe una tarea"
                  handleValue={this.handleTaskChange}
                />
              </div>
              <div className="col-3">
                <Button
                  handleAction={this.agregarTask}
                  labelButton="Agregar"
                  styles="btn btn-primary mb-3"
                ></Button>
              </div>
            </form>
            {this.state.tasks.map((printTask, index) => (
              <div
                className="d-flex justify-content-between mt-2"
                key={printTask}
              >
                <h5>{printTask}</h5>
                <Button
                  handleAction={() => this.borrarTarea(index)}
                  labelButton="Borrar"
                  styles="btn btn-danger ms-5"
                ></Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
