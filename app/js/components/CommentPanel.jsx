import React from 'react';
import {getCategoryTask, listComment, addNewComment, updateTaskName, updateTaskDesc} from './TodoStore.jsx';

export default class CommentPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      currentTask: getCategoryTask()
    };
    this.updateCurrentTask = this.updateCurrentTask.bind(this);
    listComment(this.updateCurrentTask);
  }
  updateCurrentTask() {
    this.setState({currentTask: getCategoryTask()});
  }
  render() {
      return (
          <div className='comment-panel'>
            <div className='task-detail'>
              <CommentTaskNameDom currentTask={this.state.currentTask}/>
              <CommentTaskDescDom currentTask={this.state.currentTask}/>
            </div>
            <CommentsListDom currentTask={this.state.currentTask}/>
            <CommentTextDom/>
          </div>
      );
  }
}

class CommentTaskNameDom extends React.Component {
  render() {
    if (!this.props.currentTask) {
      return null;
    }
    return (
      <div>
        <input type='text' value={this.props.currentTask.name} placeholder='Edit task name' onChange={(e) => updateTaskName(e)}/>
      </div>
    );
  }
}

class CommentTaskDescDom extends React.Component {
  render() {
    if (!this.props.currentTask) {
      return null;
    }
    return (
      <div>
        <textarea value={this.props.currentTask.description} placeholder='Task description' onChange={(e) => updateTaskDesc(e)}/>
      </div>
    );
  }
}

class CommentTextDom extends React.Component {
  render() {
    return (
      <div className='comment-section'>
        <input type='text' placeholder='Add a Comment' onKeyPress={(e) => addNewComment(e)}/>
      </div>
    );
  }
}

class CommentsListDom extends React.Component {
  render() {
    if (!this.props.currentTask) {
      return null;
    }
    return (
      <div className='comment-list'>
        {this.props.currentTask.comments.length > 0 ? this.props.currentTask.comments.map((comment, i) => <NewCommentDom key={i} commentData={comment}/>) : ''}
      </div>
    );
  }
}

class NewCommentDom extends React.Component {
  render() {
    if (!this.props.commentData.comment) {
      return null;
    }
    return (
      <div className='comment'>
        <span>{this.props.commentData.comment}</span>
        <span className='comment-date-span'>{this.props.commentData.createdOn}</span>
      </div>
    );
  }
}
