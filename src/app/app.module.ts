import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  

import { AppComponent } from './app.component';
import { practiceComponent } from './practice/practice.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    practiceComponent
    StudentComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
