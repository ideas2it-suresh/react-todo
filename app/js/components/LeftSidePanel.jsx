import React from 'react';
import {getTaskList, addNewCategory, listCategory, setSelectedCategory} from './TodoStore.jsx';

export default class LeftsidePanel extends React.Component {
  render() {
    return (
      <div className='left-side-panel'>
        <UserDetail/>
        <CategoryInputDom/>
      </div>
    );
  }
}

class UserDetail extends React.Component {
    render() {
        return (
            <div className='user-details'>
                <UserAvatar/>
                <UserName/>
            </div>
        );
    }
}

class UserAvatar extends React.Component {
    render() {
        return (
            <div className='avatar' title='Johnny Depp'>
                <img src={'./app/images/avatar.jpg'}/>
            </div>
        );
    }
}

class UserName extends React.Component {
    render() {
        return (
            <div>
                <span className='user-name'>
                    Johnny Depp
                </span>
            </div>
        );
    }
}

class CategoryInputDom extends React.Component {
  constructor() {
    super();
    this.state = {
      taskList: getTaskList()
    };
    this.updateCategoryList = this.updateCategoryList.bind(this);
    listCategory(this.updateCategoryList);
  }
  updateCategoryList() {
    this.setState({taskList: getTaskList()});
  }
  render() {
    return (
      <div>
        <div>
          <input type='text' placeholder='Category' id='categoryName' onKeyPress={(e) => addNewCategory(e)}/>
        </div>
        <div className='category-content-div'>
          {this.state.taskList ? this.state.taskList.map((catgry, i) => <AddNewCategoryDom key={i} index={i} categoryData={catgry}/>) : ''}
        </div>
      </div>
    );
  }
}

class AddNewCategoryDom extends React.Component {
    render() {
      if (!this.props.categoryData.category) {
          return null;
      }
      return (
          <div className="category-list" onClick={(e) => setSelectedCategory(this.props.index, e)}>
            <i className='fa fa-list-ul'/>
            {this.props.categoryData.category}
          </div>
      );
    }
}
