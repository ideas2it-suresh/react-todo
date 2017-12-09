var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

var selectedCategory = '';
var selectedTask = '';
var showCommentSection = false;
var taskList = [];

module.exports = {

  getTaskList: function () {
    return taskList;
  },

  getCategory: function () {
    return taskList[selectedCategory];
  },

  getCategoryTask: function () {
    return taskList[selectedCategory].task[selectedTask];
  },

  listCategory: function(callback) {
    emitter.addListener('listCategory', callback);
  },

  addNewCategory: function (event) {
    if (event.key === 'Enter') {
      taskList = taskList.concat({category: event.target.value, task:[]});
      emitter.emit('listCategory');
      event.target.value = '';
    }
  },

  listTask: function(callback) {
    emitter.addListener('listTask', callback);
  },

  addNewTask: function (event) {
    if (event.key === 'Enter') {
      var newTask = taskList[selectedCategory].task.concat({name: event.target.value, description: '', comments:[]});
      var newTasklist = taskList;
      newTasklist[selectedCategory].task = newTask;
      taskList = newTasklist;
      emitter.emit('listTask');
      event.target.value = '';
    }
  },

  listComment: function(callback) {
    emitter.addListener('listComment', callback);
  },

  addNewComment: function (event) {
    if (event.key === 'Enter') {
      var newTaskComment = taskList[selectedCategory].task[selectedTask].comments.concat({comment: event.target.value, createdOn: new Date().toLocaleString()});
      var newTasklist = taskList;
      newTasklist[selectedCategory].task[selectedTask].comments = newTaskComment;
      taskList = newTasklist;
      emitter.emit('listComment');
      event.target.value = '';
    }
  },

  updateTaskName: function (event) {
    taskList[selectedCategory].task[selectedTask].name = event.target.value;
    emitter.emit('listTask');
    emitter.emit('listComment');
  },

  updateTaskDesc: function () {
    taskList[selectedCategory].task[selectedTask].description = event.target.value;
    emitter.emit('listTask');
    emitter.emit('listComment');
  },

  setSelectedCategory: function(index, event) {
    selectedCategory = index;
    showCommentSection = false;
    selectedTask = '';
    var prevTaskSel = document.getElementsByClassName('active-task');
    if (prevTaskSel[0]) {
      prevTaskSel[0].classList.remove('active-task');
    }
    var prevCatgrySel = document.getElementsByClassName('active-category');
    if (prevCatgrySel[0]) {
      prevCatgrySel[0].classList.remove('active-category');
    }
    event.target.classList.add('active-category');
    emitter.emit('listTask');
    emitter.emit('updateCommentStatus');
  },

  setSelectedTask: function(index, event) {
    selectedTask = index;
    showCommentSection = true;
    var prevTaskSel = document.getElementsByClassName('active-task');
    if (prevTaskSel[0]) {
      prevTaskSel[0].classList.remove('active-task');
    }
    event.target.classList.add('active-task');
    emitter.emit('updateCommentStatus');
    emitter.emit('listComment');
  },

  updateCommentStatus: function (callback) {
    emitter.addListener('updateCommentStatus', callback);
  },

  getShowComment: function () {
    return showCommentSection;
  },

  strikeTaskRow: function (e) {
    var classRow = document.getElementsByClassName('strike-text');
    if (classRow.length > 0) {
      e.target.parentNode.parentNode.classList.remove("strike-text");
    } else {
      e.target.parentNode.parentNode.classList.add("strike-text");
    }
  },

  deleteTaskRow: function (e) {
    e.target.parentNode.parentNode.remove();
  }
};
