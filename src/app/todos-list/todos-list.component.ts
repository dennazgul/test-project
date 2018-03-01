import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.css']
})
export class TodosListComponent implements OnInit {
  @Input() todos: Todo[];
  @Input() todoEdit: Todo = new Todo();
  @Output() edit: EventEmitter<Todo> = new EventEmitter<Todo>();
  @Output() delete: EventEmitter<Todo> = new EventEmitter<Todo>();
  constructor() { }

  ngOnInit() { }
  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }
  onDelete(todo: Todo) {
    this.delete.emit(todo);
  }
}
