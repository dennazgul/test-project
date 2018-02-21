import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../first-attempt/array-model';
import { NgModule } from '@angular/core';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {
  @Input() todo: Todo = new Todo();
  @Output() onUpdate: EventEmitter<Todo> = new EventEmitter<Todo>();/*мы присваиваем переменной
  onUPdate класс эвент эмиттер, которому присваиваем класс туду. наверно.*/
  constructor() {}

  ngOnInit() {}
  onAdd() {
    this.onUpdate.emit(this.todo);/*переменной апдейт делается свойство эммит (чтоб она отправилась)
  в путь */  }
}
