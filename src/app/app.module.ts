import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';  
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { practiceComponent } from './practice/practice.component';
import { EmpComponent } from './employee/emp.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    practiceComponent,
    EmpComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot([
      {path: 'practice', component: practiceComponent},
      {path: 'student', component: StudentComponent},
      {path: 'employee', component: EmpComponent}
    ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
