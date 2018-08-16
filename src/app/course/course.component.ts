import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  email = "me@example.com";
  constructor() { }

  ngOnInit() {
  }

  onKeyUp()
  {    
    console.log("email is:" + this.email);
  }

}
