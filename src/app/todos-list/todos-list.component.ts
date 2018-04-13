import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';
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
  constructor(public dialog: NgbModal) { }

  ngOnInit() { }
  onEdit(todo: Todo) {
    this.edit.emit(todo);
  }
  onDelete(todo: Todo) {
    const dialogRef = this.dialog.open(DialogDeleteComponent);
    dialogRef.result.then(rsp => {
      if (rsp === true) {
        this.delete.emit(todo);
      }
    });
  }
}
