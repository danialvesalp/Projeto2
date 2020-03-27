/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e75197f06e8563f32296087
*
* You will get 10% discount for each one of your friends
* 
*/
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { StudentService } from '../../services/student.service';
// Import Models
import { Student } from '../../domain/projeto2_db/student';

// START - USED SERVICES
/**
* StudentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* StudentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Student
 * @class StudentListComponent
 */
@Component({
    selector: 'app-student-list',
    templateUrl: './student-list.component.html',
    styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {
    list: Student[];
    search: any = {};
    idSelected: string;
    constructor(
        private studentService: StudentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.studentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Student to remove
     *
     * @param {string} id Id of the Student to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Student
     */
    deleteItem() {
        this.studentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
