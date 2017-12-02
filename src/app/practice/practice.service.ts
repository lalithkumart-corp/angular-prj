import { Injectable } from '@angular/core';
import { Http } from '@angular/http';  
import 'rxjs/add/operator/map'; 
@Injectable()
export class HttpTestService{
    constructor(private _http: Http){}
    theUrl: string;
    getCurrentTime(){        
        this.theUrl = 'http://date.jsontest.com';
        return this._http.get(this.theUrl)
            .map(res => res.json());
    }
    getMyMsg(){
        this.theUrl = 'http://localhost:8080/cricketerList';
        return this._http.get(this.theUrl)
            .map(res => res.json());
    }
}