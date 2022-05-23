import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industrial',
  templateUrl: './industrial.component.html',
  styleUrls: ['./industrial.component.css']
})
export class IndustrialComponent implements OnInit {
  i1="../../../assets/k8.webp";
  public h1:any="INDUSTRIAL";
  public h2:any="Keeley’s Industrial Group has established itself as a leader in its field for its expertise in completing projects nationwide with the highest quality and safety standards. We offer a robust service line in both manufacturing and heavy industries.";
  public p1:any=" Keeley Industrial has established itself as a leader in its field for its expertise in completing multi-million dollar designs, installation and maintenance of state-of-the-art mega shredders and material separators for scrap contractors; it also specializes in installing conveyor and packaging systems. Keeley’s Industrial Group offers full-range services across the retail, aerospace and power utility industries.";
  public p2:any="";
  public p3:any="";
  public p4:any="";
  public p5:any="";
  public   :any="";
  constructor() { }

  ngOnInit(): void {
  }

}
