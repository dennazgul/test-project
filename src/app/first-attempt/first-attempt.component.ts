import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.css']
})
export class FirstAttemptComponent {
  title = 'shit parad';
  valueFromInput = 'g';
  editMode = '';
  valueFromChangedInput = 'введите текст'
  todos = [
    'Первая строка',
    'Второй пункт',
    'Кажется, работает',
    'Точно!',
  ];
  onClick() {

    if (!_.isEmpty(this.valueFromInput)) {
      this.todos.push(this.valueFromInput);
    }
  }
  onDelete(todo: string) {
    const index = this.todos.indexOf(todo);
    if (index > -1) {

      this.todos.splice(index, 1);
    }
  }
  onDeleteIndex(index: number) {
    this.todos.splice(index, 1);
  }
  onDeleteLodash(todo: string) {
    _.remove(this.todos, item => {
      return item === todo;
    })
  }
  onSave(todo: string) {
    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1, this.valueFromChangedInput);
    this.valueFromChangedInput = '';
    this.editMode = '';
  }
  blaster() {
    if (!_.isEmpty(this.valueFromInput)) {
      if (!_.isEmpty(this.editMode)) {
        const index = this.todos.indexOf(this.editMode);
        this.todos.splice(index, 1, this.valueFromInput);
        this.valueFromInput = '';
        this.editMode = '';
      }
      else {
        this.todos.push(this.valueFromInput);
      }
    }
  }
}
/*export class FirstAttemptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
