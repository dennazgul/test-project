import { Component, OnInit } from '@angular/core';

const todos = [
  'Первая строка',
  'Второй пункт',
  'Кажется, работает',
  'Точно!',
  ];

@Component({
  selector: 'app-first-attempt',
  templateUrl: 'first-attempt.component.html',
  styleUrls: ['first-attempt.component.css']
})
export class FirstAttemptComponent {
  title = 'shit parad';
  todos = todos;
}
/*export class FirstAttemptComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}*/
