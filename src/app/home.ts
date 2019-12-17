import {Component,OnInit} from '@angular/core'
// import {Observable} from 'rxjs/Observable'
import {HttpClient} from '@angular/common/http'
import { __values } from 'tslib';
import { Observable } from 'rxjs'



// interface Course{
//     description:string;
//     longdescription:string;
// }
@Component({
    selector:'home',
    template:`<h1>HOme COmponent</h1>
        <table>
        <tr *ngFor="let a of courses" >
            <td>{{a.description}}</td>
        </tr>
        </table>
    `
})

export class home implements OnInit{
    // courses:Observable<Course[]>;
    courses:any=[]

    courses1:any=[]
    constructor(private http:HttpClient){}

    ngOnInit(){
        this.http
        .put("https://angular-firebase-77788.firebaseio.com/courses.json",
        {
        "description":"hey123",
        "description1":"hey1234",
        "description2":"hey1235",
        "description3":"hey1236"
          }
        )
        .subscribe(
      
            response=>{
                console.log("my response",response)
            }
        )
       this.http.get("https://angular-firebase-77788.firebaseio.com/courses.json")
       .subscribe(res=>this.courses.push(res));
       this.courses1=JSON.stringify(this.courses)
        console.log(this.courses)
      
    }
}