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
  todos = [
    'Первая строка',
    'Второй пункт',
    'Кажется, работает',
    'Точно!',
    ];
    onClick () {
     // if(!_.isEmpty(this.valueFromInput)) {
        this.todos.push(this.valueFromInput);
     // }
    }
}
/*export class FirstAttemptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
