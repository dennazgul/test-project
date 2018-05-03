import { Component, OnInit } from '@angular/core';
import { Todo } from './array-model';
import * as _ from 'lodash';
import { TodoService } from '../services/todo-service';
import { NumberChangerPipe } from '../number-changer.pipe';

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.scss'],
})
export class FirstAttemptComponent {
  addButtonToggle = true;
  todosList: Todo[] = [];
  activeItem: Todo = new Todo();
  // activeUpperItem: Todo = new Todo();
  constructor(private todoService: TodoService) {
    this.todosList = this.todoService.getAll();
    /* const todo = new Todo();
     todo.id = 1;
     todo.title = 'test';
     const todo1 = new Todo();
     todo1.id = 2;
     todo1.title = 'test2';
     todo1.title = 'test3';
     this.todosList.push(todo);
     this.todosList.push(todo1);*/
  }

  ngOnInit() { }
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
  }
  onDeleteItem(todo: Todo) {
    this.todoService.delete(todo);
  }
  onAdd(todo: Todo) {
    if (!_.isUndefined(todo)) {
      if (_.isUndefined(todo.id)) {
        this.todoService.add(todo);
      } else {
        this.todoService.update(todo);
      }
      this.activeItem = new Todo();
    }
  }
  cleaning() {
    this.activeItem.title = undefined;
  }
  onCancelItem(todoUpper: Todo) {
    this.activeItem = _.clone(todoUpper);
  }
  openEditForm() {
    this.addButtonToggle = !this.addButtonToggle;
  }
  closeEditForm() {
    this.addButtonToggle = !this.addButtonToggle;
    this.activeItem = new Todo();
  }
}
