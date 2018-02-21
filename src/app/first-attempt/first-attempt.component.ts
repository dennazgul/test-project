import { Component, OnInit } from '@angular/core';
import { Todo } from './array-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.css']
})
export class FirstAttemptComponent {
  todosList: Todo[] =[];//создаем пустой массив элементов класса тодо
  activeItem: Todo = new Todo();//создаём переменную с классом тодо
  constructor() { //ВОПРОС какая разница, в конструкторе что-то или за его пределами
    const todo = new Todo();
    todo.id = 1;
    todo.title = 'test';
    const todo1 = new Todo();
    todo1.id = 2;
    todo1.title = 'test2';
    this.todosList.push(todo);//ВОПРОС всякие "штуки" типа slice, push и т.д. могут использоваться без вызова функции? здесб же это не часть функции. а просто... объявление или что-то такое.
    this.todosList.push(todo1);
    //this.activeItem = _.clone(this.todosList[0]);
  }

  ngOnInit() {}
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);
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
        this.activeItem = new Todo();
      } else {
      const newElement = new Todo();
      newElement.id = this.getId();
      newElement.title = todo.title;
      this.todosList.push(newElement);
    }
  }
    this.activeItem = new Todo();
  }
  getId(): number {
    const maxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(maxId) ? 0 : maxId.id + 1;
  }
}
