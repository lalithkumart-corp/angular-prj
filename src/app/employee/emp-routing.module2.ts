import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpComponent }   from './emp.component';

const routes: Routes = [
  { path: '', component: EmpComponent }
];

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class EmpRoutingModule{}
export const routingComponents = [EmpComponent];
