import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mumbai',
  templateUrl: './mumbai.component.html',
  styleUrls: ['./mumbai.component.css']
})
export class MumbaiComponent implements OnInit {

  constructor(private ser:DataService) { }
public citiesData:any;
public labeleData:any;
public cities:any= [
  {
      id: 1,
     

      compName: "Shree Samarth Construction",
      compInfo: "Shree Samarth Construction in Mumbai is one of the leading businesses in the Painting Contractors For Residential. Also known for Civil Contractors, Painting Contractors, House Painters, Waterproofing Contractors, Plumbing Contractors, Civil Contractors For Residential, Flooring Contractors, Waterproofing Contractors For Terrace and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Shree Samarth Construction, Mumbai",
      
  },
  {
      id:2,
    
      compName:"Vishwakarma Civil Contractor",
      compInfo:"Vishwakarma Civil Contractor in Navi Mumbai, Mumbai is one of the leading businesses in the Civil Contractors. Also known for Civil Contractors, Interior Decorators, Carpentry Contractors, Furniture Contractors, Civil Contractors For Residential, Painting Contractors For Residential and much more. Find Address, Contact Number, Reviews & Ratings, Photos, Maps of Vishwakarma Civil Contractor, Navi Mumbai, Mumbai.",
     
  }
]

  ngOnInit(): void {console.log(this.cities);
    
    // this.citiesDataFromBackend();
    // this.labelsData();
  }
// citiesDataFromBackend(){
//   this.ser.getCitiesData().subscribe((res)=>{console.log(res),
//   this.citiesData=res},
//   (err)=>console.log(err))
// }
// labelsData(){
//   this.ser.getFormData().subscribe((res)=>{
//     console.log(res),
//     this.labeleData=res;
  
//   })
// }


}
