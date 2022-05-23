import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {
bgimg="../assets/bg-3.webp";
slide1="../assets/bg-10.webp";
slide2="../assets/bg-11.webp";
slide3="../assets/bg-4.webp";
public p1:any="Welcome to construction";
public h1:any="THE BEST COMPANY";
public b1:any="Our Portfolio ";
public h2:any="Fast and Reliable Service For Your Project";
public h3:any="Educational";
public h4:any="Residential";
public h5:any="Industrial";
public   :any="";
  constructor(private route:Router) { }

  ngOnInit(): void {
  }


// onportFolio(){
//   console.log('portfolio is working');
//   this.route.navigate(['home/ourServices']);
// }
}
