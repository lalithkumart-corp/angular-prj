import { NgModule } from '@angular/core';
import { EmpComponent }   from './emp.component';
import { routing } from './emp-routing.module';
import { routingComponents } from './emp-routing.module';
import { EmpService } from './emp.service';
import { CommonModule } from "@angular/common"; //needed to work with *ngFor in templates
@NgModule({
  imports: [routing, CommonModule],
  declarations: [routingComponents],
  providers: [EmpService]
})
export class EmpModule {}
