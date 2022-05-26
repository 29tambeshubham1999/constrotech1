import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public no:any='+91-14003413324';
  public mail:any='sales@constrotech.com';
  public timetable:any='Mon-Fri: 7:00-17:00';

  public companies: any[] = [
    { "id": 0, "name": "Available" },
    { "id": 1, "name": "Ready" },
    { "id": 2, "name": "Started" }
  ];
  constructor() { }

  ngOnInit(): void {

  }

}
