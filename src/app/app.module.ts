import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FirstAttemptComponent } from './first-attempt/first-attempt.component';


@NgModule({
  declarations: [
    AppComponent,
    FirstAttemptComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent,
    FirstAttemptComponent
  ]
})
export class AppModule { }
