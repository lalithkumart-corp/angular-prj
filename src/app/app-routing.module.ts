import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { practiceComponent } from './practice/practice.component';

const router:Routes = [ 
    {path: 'practice', component: practiceComponent},
    {path: 'student', component: StudentComponent},
    {path: 'employee', loadChildren: './employee/emp.module#EmpModule'}
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
export const routingComponents = [practiceComponent, StudentComponent]