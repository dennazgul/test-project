import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { arrayModel } from '../first-attempt/array-model'

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.css']
})
export class FirstAttemptComponent {
  title = 'shit parad';
  valueFromInput = '';
  editMode = '';
  idForChange: number;
  valueFromChangedInput = 'введите текст'
  todos: arrayModel[] = [];
  /*[
    'Первая строка',
    'Второй пункт',
    'Кажется, работает',
    'Точно!',
  ];*/
  onClick() {
    if (!_.isEmpty(this.valueFromInput)) {
      const newElement = new arrayModel(); //что конкретно мы делаем этой строкой
      newElement.id = this.getNextId();
      newElement.title = this.valueFromInput;
      this.todos.push(newElement);
    }
  }
  getNextId(): number {
    const elementWithMaxId: arrayModel = _.maxBy(this.todos, "id");
    return _.isUndefined(elementWithMaxId) ? 0 : elementWithMaxId.id + 1;
  }
  getIdForChange(arrayModel: arrayModel) {
    const currentElementId = arrayModel.id;
    this.idForChange = currentElementId;
  }
  onDelete(arrayModel: arrayModel) {
    _.remove(this.todos, (todo1: arrayModel) => {
      return todo1.id === arrayModel.id;
    })
  }
  onDeleteIndex(index: number) {
    this.todos.splice(index, 1);
  }
  onDeleteLodash(arrayModel: string) {
    _.remove(this.todos, item => {
      return item === arrayModel;
    })
  }
  /*onDelete(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {

      this.todos.splice(index, 1);
    }
  }*/
  /*onSave(todo: string) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1, this.valueFromChangedInput);
    this.valueFromChangedInput = '';
    this.editMode = '';
  }*/
  blaster() {
    if (!_.isEmpty(this.valueFromInput)) {
      if (!_.isEmpty(this.editMode)) {
        const changedElement = new arrayModel();
        changedElement.id = this.idForChange;
        changedElement.title = this.valueFromInput;
        this.todos.splice(changedElement.id, 1, changedElement);
        this.valueFromInput = '';
        this.editMode = '';

        /*const index = this.todos.indexOf(this.editMode);
        this.todos.splice(index, 1, this.valueFromInput);
        this.valueFromInput = '';
        this.editMode = '';*/
      }
      else {
      const newElement = new arrayModel(); //что конкретно мы делаем этой строкой
      newElement.id = this.getNextId();
      newElement.title = this.valueFromInput;
      this.todos.push(newElement);
      }
    }
  }
}
/*export class FirstAttemptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
