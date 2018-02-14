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
  editMode: arrayModel = null;
  idForChange: number;
  valueFromChangedInput = 'введите текст'
  todos: arrayModel[] = [];
  onClick() {
    if (!_.isEmpty(this.valueFromInput)) {
      const newElement = new arrayModel();
      newElement.id = this.getNextId();
      newElement.title = this.valueFromInput;
      this.todos.push(newElement);
    }
  }
  getNextId(): number {
    const elementWithMaxId: arrayModel = _.maxBy(this.todos, "id");
    return _.isUndefined(elementWithMaxId) ? 0 : elementWithMaxId.id + 1;
  }
  getIdForChange(todo: arrayModel) {
    this.idForChange = todo.id;
  }
  onDelete(todo: arrayModel) {
    _.remove(this.todos, (todo1: arrayModel) => {
      return todo1.id === todo.id;
    })
  }
  compareTodo (todo1: arrayModel):boolean {
    return todo1.id === this.editMode.id;
  }
  blaster() {
    if (!_.isEmpty(this.valueFromInput)) {
      if (!_.isNull(this.editMode)) {
        /*const changedElement = new arrayModel();
        changedElement.id = this.idForChange;
        changedElement.title = this.valueFromInput;
        this.todos.splice(changedElement.id, 1, changedElement);
        this.valueFromInput = '';
        this.editMode = undefined;*/
        const changedElement =_.find(this.todos, this.compareTodo );
        if (!_.isUndefined(changedElement)) {
          changedElement.title =this.valueFromInput;
        }
      }
      else {
        const newElement = new arrayModel();
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
