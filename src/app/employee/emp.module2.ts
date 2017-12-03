import { NgModule } from '@angular/core';
import { EmpRoutingModule } from './emp-routing.module2';
import { routingComponents } from './emp-routing.module2';

@NgModule({
  imports: [EmpRoutingModule],
  declarations: [routingComponents]
})
export class EmpModule {}
