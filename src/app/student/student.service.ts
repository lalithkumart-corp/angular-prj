import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class StudentService{
    constructor(private _http: Http){}
    theUrl = 'http://localhost:8080/get-skill-collection';
    getStudentList(){
        return this._http.get(this.theUrl)
                .map(res => res.json());
    }
}