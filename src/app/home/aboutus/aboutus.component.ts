import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {
i1="../../../assets/ser4.jpg" ;
i2= "../../../assets/ser5.jpg";
i3= "../../../assets/ser6.jpg";
i4= "../../../assets/ser1.jpg";
i5= "../../../assets/ser2.jpg";
i6= "../../../assets/ser3.jpg";
public h1:any="Construction Consultant";
public h2:any="Resconstruction Services";
public h3:any="Architectural Design";
public h4:any="Design & Construction";
public h5:any="The Green Building";
public h6:any="House Renovation";
public p1:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public p2:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public p3:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public p4:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public p5:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public p6:any="Nulla iaculis turpis in nibh aliquam maximus. In dignissim arcu vel diam scelerisque, pretium urna.";
public b:any="Read More";
public h:any="WHAT WE OFFER";

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

  ourServ(){
    
this.route.navigateByUrl('ourServices')
  }
}
