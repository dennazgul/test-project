import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { FirstAttemptComponent } from './first-attempt/first-attempt.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAttemptComponent,
    TodosListComponent,
    TodoEditComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FirstAttemptComponent
  ]
})
export class AppModule { }
