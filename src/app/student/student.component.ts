import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
    selector: 'student-container',
    templateUrl: './student.template.html',
    styleUrls: ['./student.styles.css'],
    providers: [StudentService]
})
export class StudentComponent{
    constructor(
        private _studentService: StudentService
    ){}
    theStringifiedList: string;
    getStudent(){
        this._studentService.getStudentList()
            .subscribe(
                data => this.theStringifiedList = JSON.stringify(data),
                error => alert(error),
                () => console.log('Finished the TIME api call')
            )
    }

}