import { NgModule } from '@angular/core';
import { EmpComponent }   from './emp.component';
import { routing } from './emp-routing.module';
import { routingComponents } from './emp-routing.module';

@NgModule({
  imports: [routing],
  declarations: [routingComponents]
})
export class EmpModule {}
