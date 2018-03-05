import { Component, OnInit } from '@angular/core';
import { Todo } from './array-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.scss']
})
export class FirstAttemptComponent {
  editFormToggle = false;
  addButtonToggle = true;
  todosList: Todo[] = [];
  activeItem: Todo = new Todo();
  activeUpperItem: Todo = new Todo();
  constructor() {
    const todo = new Todo();
    todo.id = 1;
    todo.title = 'test';
    const todo1 = new Todo();
    todo1.id = 2;
    todo1.title = 'test2';
    todo1.title = 'test3';
    this.todosList.push(todo);
    this.todosList.push(todo1);
  }

  ngOnInit() { }
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
    this.activeUpperItem = _.clone(todo);
  }
  onDeleteItem(todo: Todo) {
    _.remove(this.todosList, (todo1: Todo) => {
      return todo1.id === todo.id;
    });
  }
  onAdd(todo: Todo) {
    if (!_.isUndefined(todo)) {
      if (!_.isUndefined(todo.id)) {
        const index = _.find(this.todosList, (todo1: Todo) => {
          return todo1.id === todo.id;
        });
        if (!_.isUndefined(index)) {
          index.title = todo.title;
        }
      } else {
        const newElement = new Todo();
        newElement.id = this.getId();
        newElement.title = todo.title;
        this.todosList.push(newElement);
      }
    }
    this.activeItem = new Todo();
    this.activeUpperItem = new Todo();
  }
  cleaning() {
    this.activeItem.title = undefined;
  }
  onCancelItem(todoUpper: Todo) {
    this.activeItem = _.clone(this.activeUpperItem);
  }
  getId(): number {
    const itemWithMaxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(itemWithMaxId) ? 0 : itemWithMaxId.id + 1;
  }
  addButtonFunction() {
    this.editFormToggle = !this.editFormToggle;
    this.addButtonToggle = !this.addButtonToggle;
    //при нажатии на кнопку "добавить" меняется значение двух переменных. одна прячет кнопку, другая открывает форму редактирования
  }
  closeButtonFunction() {
    this.editFormToggle = !this.editFormToggle;
    this.addButtonToggle = !this.addButtonToggle;
    this.activeItem = new Todo();
    this.activeUpperItem = new Todo();
    //функция работает при нажатии кнопки "закрыть". Поле очищается, форма исчезает, а кнопка "добавить" становится активной
  }
}
