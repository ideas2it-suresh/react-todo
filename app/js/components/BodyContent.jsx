import React from 'react';
import LeftSidePanel from './LeftSidePanel.jsx';
import TaskList from './TaskList.jsx';
import CommentPanel from './CommentPanel.jsx';
import {getShowComment, updateCommentStatus} from './TodoStore.jsx';

export default class BodyContent extends React.Component {
  constructor() {
    super();
    this.state = {
      showComment: getShowComment()
    };
    this.updateShowCommentStatus = this.updateShowCommentStatus.bind(this);
    updateCommentStatus(this.updateShowCommentStatus);
  }
  updateShowCommentStatus() {
    this.setState({showComment: getShowComment()});
  }
    render() {
      return (
        <div className="container">
            <LeftSidePanel/>
            <TaskList commentShow={this.state.showComment}/>
            {this.state.showComment ? <CommentPanel/> : ''}
        </div>
      );
    }
}
