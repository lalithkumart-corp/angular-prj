import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { practiceComponent } from './practice/practice.component';
import { EmpComponent } from './employee/emp.component';

const router:Routes = [ 
    {path: 'practice', component: practiceComponent},
    {path: 'student', component: StudentComponent},
    {path: 'employee', component: EmpComponent}
];

@NgModule({
    imports:[
        RouterModule.forRoot(router)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
export const routingComponents = [practiceComponent, StudentComponent, EmpComponent]