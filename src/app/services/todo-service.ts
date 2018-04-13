import { Component, OnInit, Injectable } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import * as _ from 'lodash';

@Injectable()
export class TodoService {
  activeItem: Todo = new Todo();
  todoList: Todo[] = [];
  activeUpperItem: Todo = new Todo();
  getAll(): Todo[] {
    return this.todoList;
  }
  getTodo(id: number): Todo {
    return _.find(this.todoList, (todo1: Todo) => {
      return todo1.id === id;
    });
  }
  add(todo: Todo) {
    const newElement = new Todo();
    newElement.id = this.generateId();
    newElement.title = todo.title;
    this.todoList.push(newElement);
  }
  update(todo: Todo) {
    const index = _.find(this.todoList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
    if (!_.isUndefined(index)) {
      index.title = todo.title;
    }
  }
  private generateId(): number {
    const itemWithMaxId: Todo = _.maxBy(this.todoList, 'id');
    return _.isUndefined(itemWithMaxId) ? 0 : itemWithMaxId.id + 1;
  }
  delete(todo: Todo) {
    _.remove(this.todoList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
  }
}
