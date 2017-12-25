/**
 * @Component: EmpRecordComponent
 * This component is used to display the list of Employee's in a Table format
 * It performs:
    - It has a variable connected with its template(Template: for displaying the employee lists in a table view)
    - Triggers a service method to get full employee list
    - Once the data is obtained, it will update the local dataModel in this component. And since this variable is used in the template, the template will get updated!
 */
import { Component } from '@angular/core';
import { EmpService } from '../emp.service';
@Component({
    selector: 'emp-record',
    templateUrl: 'empRecord.template.html',
    styleUrls: ['./empRecord.styles.css']
})
export class EmpRecordComponent{
    constructor(
        private _empService: EmpService
    ){}
    empData:any;
    ngOnInit(){
        this._empService.getEmpRecords()
            .subscribe(
                data => {this.empData = data}
            )
    }
}