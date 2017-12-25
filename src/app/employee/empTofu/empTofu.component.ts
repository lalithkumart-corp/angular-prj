/**
 * @Component: EmpTofuComp
 * This component is a placeholder for any type. 
 * Here, we used this TOFU block for displaying the single recently created employee detail
 */
import { Component } from '@angular/core';
import { EmpService } from '../emp.service';

@Component({
    selector: 'emp-tofu',
    templateUrl: './empTofu.template.html',
    styleUrls: ['./empTofu.styles.css']
})
export class EmpTofuComp{
    constructor(
        private _empService:EmpService
    ){}
    recentEmpData:any;
    ngOnInit(){
        this._empService.reactivedataModel
                .subscribe(
                    data => {
                        this.recentEmpData = this.pickRecentEmpData(data)
                    }   
                )
    }
    pickRecentEmpData(data){
        var theRecentEmpData = [];
        if(data !== null)
            theRecentEmpData.push(data[0]);
        return theRecentEmpData;
    }
}