import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import { NgModule, SimpleChanges } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit, OnChanges {
  @Input() todo: Todo = new Todo();
  todoUpper: Todo = new Todo();
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onClear: EventEmitter<void> = new EventEmitter<void>();
  @Output() onCancel: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() onClose: EventEmitter<void> = new EventEmitter<void>();
  constructor() {
  }
  ngOnChanges(changes: SimpleChanges) {
    if (changes['todo']) {
      this.todoUpper = _.clone(changes['todo'].currentValue);
    }
  }
  ngOnInit() { }
  onAdd() {
    if (!_.isEmpty(this.todo.title)) {
      this.onUpdate.emit(this.todo);
    }
  }
  Cleaning() {
    this.onClear.emit();
  }
  Cancel() {
    this.onCancel.emit(this.todoUpper);

  }
  Close() {
    this.onClose.emit();
  }
}
