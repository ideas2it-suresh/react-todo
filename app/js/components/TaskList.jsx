import React from 'react';
import {getCategory, addNewTask, listTask, setSelectedTask, strikeTaskRow, deleteTaskRow} from './TodoStore.jsx';

export default class TodoList extends React.Component {
  render() {
    if (this.props.commentShow) {
      return (
        <div className='todo-list'>
          <TaskInputDom/>
        </div>
      );
    } else {
      return (
        <div className='todo-full-list'>
          <TaskInputDom/>
        </div>
      );
    }
  }
}

class TaskInputDom extends React.Component {
  constructor() {
    super();
    this.state = {
      categoryList: getCategory()
    };
    this.updateTaskList = this.updateTaskList.bind(this);
    listTask(this.updateTaskList);
  }
  updateTaskList() {
    this.setState({categoryList: getCategory()});
  }
  render() {
    if (!this.state.categoryList) {
        return null;
    }
    return (
      <div className="task-content-div">
        <div className='add-task-div'>
          <input type='text' placeholder='Add a task...' id='taskName' onKeyPress={(e) => addNewTask(e)}/>
        </div>
        {this.state.categoryList.task ? this.state.categoryList.task.map((task, i) => <TaskListDom key={i} index={i} taskData={task}/>) : ''}
      </div>
    );
  }
}

class TaskListDom extends React.Component {
  render() {
    if (!this.props.taskData.name) {
        return null;
    }
    return (
      <div className="task-list-group">
        <div className="task-list" onClick={(e) => setSelectedTask(this.props.index, e)}>
          {this.props.taskData.name}
        </div>
        <span>
          <i className='fa fa-check' onClick={(e) => strikeTaskRow(e)}></i>
          <i className='fa fa-trash' onClick={(e) => deleteTaskRow(e)}></i>
        </span>
      </div>
    );
  }
}
