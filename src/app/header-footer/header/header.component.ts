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
  constructor() { }

  ngOnInit(): void {
  }

}
