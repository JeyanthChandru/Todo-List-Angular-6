import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newTodo: boolean = false;
  newTodoText: string;
  todoList = [];
  completedTodo = [];

  displayNewTodo() {
    this.newTodo = true;
  }

  saveTodo() {
    this.todoList.push(this.newTodoText);
    this.resetTodo();
  }

  resetTodo() {
    this.newTodo = false;
    this.newTodoText = null;
  }

  removeTodo(index) {
    if (this.todoList.length == 1) {
      this.todoList = [];
    }
    else {
      this.todoList.splice(index, 1);
    }
  }

  completed(i) {
    this.completedTodo.push(this.todoList[i]);
    this.todoList.splice(i, 1);
  }

  changeFromCompleted(i) {
    this.todoList.push(this.completedTodo[i]);
    this.completedTodo.splice(i, 1);
  }

}
