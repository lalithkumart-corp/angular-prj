/**
 * This is a service, it performs following actions:
    - Has a method for fetching data from Database through API, and return resp data to subscribed blocks
    - Has a observable variable, whenever this variable is changed - it will notify its subscriber blocks with updated data
 */
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import 'rxjs/add/operator/map';

@Injectable()
export class EmpService{
    constructor(
        private _http: Http
    ){
        //this.getEmpRecords(); <-- no use in calling API from here
        this.dataModel = new BehaviorSubject<any>(null);
        this.reactivedataModel = this.dataModel.asObservable();
    }
    dataModel:any;
    reactivedataModel:any;
    empRecordSource:string = 'https://jsonplaceholder.typicode.com/users';

    getEmpRecords(){
        return this._http.get(this.empRecordSource)
            .map(res => {
                            var responseData = res.json();
                            this.dataModel.next(responseData);
                            return responseData;
                })
    }
}