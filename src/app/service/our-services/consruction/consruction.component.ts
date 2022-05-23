import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-consruction',
  templateUrl: './consruction.component.html',
  styleUrls: ['./consruction.component.css']
})
export class ConsructionComponent implements OnInit {
  public h1:any="CONSTRUCTION";
  public h2:any="Construction is a general term meaning the art and science to form objects, systems, or organizations,[1] and comes from Latin constructio (from com-  and struere ) and Old French construction.[2] To construct is the verb: the act of building, and the noun is construction: how something is built, the nature of its structure. ";
  public p1:any=" In its most widely used context, construction covers the processes involved in delivering buildings, infrastructure, industrial facilities and associated activities through to the end of their life. It typically starts with planning, financing, and design, and continues until the asset is built and ready for use; construction also covers repairs and maintenance work, any works to expand, extend and improve the asset, and its eventual demolition, dismantling or decommissioning.";
  public p2:any="The construction industry contributes significantly to many countries’ gross domestic products (GDP). Global expenditure on construction activities was about $4 trillion in 2012. Today, expenditure on the construction industry exceeds $11 trillion a year, equivalent to about 13 percent of global GDP. This spending was forecast to rise to around $14.8 trillion in 2030.[3] ";
  public p3:any="Although the construction industry promotes economic development and brings many non-monetary benefits to many countries, it is one of the most hazardous industries. For example, about 20% (1,061) of US industry fatalities in 2019 happened in construction.";
  public p4:any="";
 
  

  constructor() { }

  ngOnInit(): void {
  }

}
