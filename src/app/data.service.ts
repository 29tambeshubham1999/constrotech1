import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getCitiesData(){
    return this.http.get('http://localhost:3000/api/getAllcities');
  }
  // getFormData(){
  //   return this.http.get('http://localhost:3000/api/getAllLabels')
  // }
}
