import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {
  public citiesData:any;
  public labeleData:any;
  public value:any;
  public cities:any;
  constructor(private ser:DataService, private forms:FormsModule ) { }

// public cities:any=['shubh', 'mahi', 'mandar'];

// public companies: any[] = [
//   { "id": 0, "name": "Available" },
//   { "id": 1, "name": "Ready" },
//   { "id": 2, "name": "Started" }
// ];


// public cities:any= [
//   {
//       id: 1,
     

//       compName: "Shree Samarth Construction",
//       compInfo: "Shree Samarth Construction in Mumbai is one of the leading businesses in the Painting Contractors For Residential. Also known for Civil Contractors, Painting Contractors, House Painters, Waterproofing Contractors, Plumbing Contractors, Civil Contractors For Residential, Flooring Contractors, Waterproofing Contractors For Terrace and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Shree Samarth Construction, Mumbai",
      
//   },
//   {
//       id:2,
    
//       compName:"Vishwakarma Civil Contractor",
//       compInfo:"Vishwakarma Civil Contractor in Navi Mumbai, Mumbai is one of the leading businesses in the Civil Contractors. Also known for Civil Contractors, Interior Decorators, Carpentry Contractors, Furniture Contractors, Civil Contractors For Residential, Painting Contractors For Residential and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Vishwakarma Civil Contractor, Navi Mumbai, Mumbai.",
     
//   }
// ]

  ngOnInit(): void {
    
    this.citiesDataFromBackend();
    // this.labelsData();
  }
citiesDataFromBackend(){
  this.ser.getCitiesData().subscribe((res:any)=>
  {console.log(res);
  this.citiesData=res;
  this.cities=res[0];
}
  
  )
}
// labelsData(){
//   this.ser.getFormData().subscribe((res)=>{
//     console.log(res),
//     this.labeleData=res;
  
//   })
// }


}
