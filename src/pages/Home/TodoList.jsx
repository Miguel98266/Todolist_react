import React, { Component } from "react";
import Form from "../../Shared/Form";
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
    this.state.tasks.splice(index, 1)
    console.log(this.state.tasks);
    this.setState({ tasks: [...this.state.tasks] });
  }
  render() {
    return (
      <div className="App App-header">
        <div className="card">
          <h3 className="card-header">To do List</h3>
          <div className="card-body">
          <Form type="text" placeholder="Escribe una tarea" handleValue={this.handleTaskChange} handleAction={this.agregarTask} labelButton="Agregar">
          </Form>
            
            {this.state.tasks.map((printTask, index) => (
              <div
                className="d-flex justify-content-between mt-2"
                key={printTask}
              >
                <h5>{printTask}</h5>
                <button
                  type="button"
                  className="btn btn-danger ms-5"
                  onClick={() => this.borrarTarea(index)}
                >
                  Borrar
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
