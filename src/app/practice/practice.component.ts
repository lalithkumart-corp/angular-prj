import { Component } from '@angular/core';
import { HttpTestService } from './practice.service';

@Component({
    selector: 'http-test',
    templateUrl: './practice.template.html',
    styleUrls: ['./practice.style.css'],
    providers: [HttpTestService]
})

export class practiceComponent{
    getData: string;
    myMsgData: string;
    constructor(private _httpService: HttpTestService){}
    onTestGet() {
        this._httpService.getCurrentTime()
            .subscribe(
                data => this.getData = JSON.stringify(data),
                error => alert(error),
                () => console.log('Finished the TIME api call')
            );
    }
    onTestMsg() {
        this._httpService.getMyMsg()
            .subscribe(
                data => this.myMsgData = JSON.stringify(data),
                error => alert(error),
                () => console.log('Finished MSG api call')
            );
    }
}