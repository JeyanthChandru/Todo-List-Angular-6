import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  newTodo = [];
  completedTodo = [];
  constructor() { }

  addValuesTodo(val) {
    this.newTodo.push(val);
  }

  completeTodo(val) {
    this.completedTodo.push(val);
  }
}
