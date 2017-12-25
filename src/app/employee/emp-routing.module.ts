import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmpComponent }   from './emp.component';
import { EmpRecordComponent } from './empRecords/empRecords.component';
import { EmpTofuComp } from './empTofu/empTofu.component';

const routes: Routes = [
  { path: '', component: EmpComponent }
];

//export const routing = RouterModule.forChild(routes);
//    (or)
export const routing: ModuleWithProviders = RouterModule.forChild(routes);
export const routingComponents = [EmpComponent, EmpRecordComponent, EmpTofuComp];