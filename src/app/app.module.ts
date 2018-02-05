import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppComponent } from './app.component';
import { FirstAttemptComponent } from './first-attempt/first-attempt.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAttemptComponent
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
