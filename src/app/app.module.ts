import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { FirstAttemptComponent } from './first-attempt/first-attempt.component';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodoEditComponent } from './todo-edit/todo-edit.component';
import { TodoService } from './services/todo-service';
import { DialogDeleteComponent } from './dialog-delete/dialog-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstAttemptComponent,
    TodosListComponent,
    TodoEditComponent,
    DialogDeleteComponent
  ],
  entryComponents: [DialogDeleteComponent],
  imports: [BrowserModule, FormsModule, NgbModule.forRoot()],
  providers: [TodoService],
  bootstrap: [AppComponent, FirstAttemptComponent]
})
export class AppModule {}
