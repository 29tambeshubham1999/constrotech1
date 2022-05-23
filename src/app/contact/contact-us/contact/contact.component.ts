import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
public myForm:any;
public isSubmitted:boolean=false;


  constructor(private ser:DataService, private fb:FormBuilder, ) { }

  ngOnInit(): void {
    this.myForm=this.fb.group([
      {name:['',[Validators.required]]},
      {fname:['',[Validators.required]]},
      {email:['',[Validators.required]]},
      {phone:['',[Validators.required]]},
      {query:['',[Validators.required]]} 
])
  }
  onSubmit(){
    console.log(this.myForm.value);
    this.isSubmitted=true;}

  get f(){
    return this.myForm.controls;
  }
}
