import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import { NgModule } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onClear: EventEmitter<Todo> = new EventEmitter<Todo>()
  constructor() { }

  ngOnInit() { }
  onAdd() {
    if (!_.isEmpty(this.todo.title)) {
      this.onUpdate.emit(this.todo);/*переменной апдейт делается свойство эммит (чтоб она отправилась)
  в путь */  }
  }
  Cleaning() {
      this.onClear.emit(this.todo); }
}
