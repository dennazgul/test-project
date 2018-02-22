import { Component, OnInit } from '@angular/core';
import { Todo } from './array-model';
import * as _ from 'lodash';

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.css']
})
export class FirstAttemptComponent {
  todosList: Todo[] = [];//создаем пустой массив элементов класса тодо для того чтобы в дальнейшем помещать элементы
  activeItem: Todo = new Todo();//создаём переменную с классом тодо для работы со смежными компонентами
  constructor() {
    const todo = new Todo();//первый элемент списка todosList
    todo.id = 1;//его айди
    todo.title = 'test';
    const todo1 = new Todo();//второй элемент списка todosList
    todo1.id = 2;
    todo1.title = 'test2';
    todo1.title = 'test3';
    this.todosList.push(todo);//в наш пустой массив помещается инициализированный выше элемент
    //ВОПРОС всякие "штуки" типа slice, push и т.д. могут использоваться без вызова функции? здесб же это не часть функции. а просто... объявление или что-то такое.
    this.todosList.push(todo1);//в наш уже не пустой массив помещается инициализированный выше элемент номер два
    //this.activeItem = _.clone(this.todosList[0]);
  }

  ngOnInit() { }
  onEditItem(todo: Todo) {
    this.activeItem = _.clone(todo);// создаем клон прилетающей из другой компоненты переменной todo
    //для того, чтобы при нажатии кнопки "редактировать" в инпут подлетела копия,которую мы меняем
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
  }
  cleaning (todo:Todo) {
    //todo = undefined;
    if (!_.isUndefined(todo.id)) {// обязательно по айдишнику, а не тайтлу. могу рассказать зачем
      this.activeItem.title = undefined;
    } else {
    this.activeItem = new Todo();
  }
  }
  getId(): number {
    const itemWithMaxId: Todo = _.maxBy(this.todosList, 'id');
    return _.isUndefined(itemWithMaxId) ? 0 : itemWithMaxId.id + 1;
  }
}
