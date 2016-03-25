
'use strict';

/**
 * @ngdoc function
 * @name angtodoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angtodoApp
 */
angular.module('angtodoApp')
  .controller('MainCtrl', function ($filter,$localStorage) {
    
    
    this.storage=$localStorage;
    //{task:'HTML5 Boilerplate1', done: true}, {task:'MVC Boilerplate', done:false }, {task:'NodeJS Boilerplate', done: true },{task:'CSS Boiler plate', done:false }, {task:'JavaSript Boilerplate', done: true }];
   if (!$localStorage.todos){
     $localStorage.todos=[];
   }

   this.statusFilter='';
 
    //toggle status of all tasks
    this.toggleStatusAll = function () {
       angular.forEach(this.storage.todos,function (todo){
             todo.done=this.toggleAll;
         },this);
         
    };
  
   
  
  
    //adding new task
      this.addTodo = function () {
      this.storage.todos.push({ task: this.newTodo, done: false });
     //$localStorage.lstodos=this.todos;
      this.newTodo = '';
    };
  
    //deleting a task
    this.deleteTodo = function (index) {
      this.storage.todos.splice(index, 1);
   //   $localStorage.lstodos=this.todos;
    };
   
    
    //deleting all completed tasks
    this.deleteCompleted = function () {
      this.storage.todos = $filter('filter')(this.storage.todos, { done: false });
   //   $localStorage.lstodos=this.todos;
    };
  
  
  });
