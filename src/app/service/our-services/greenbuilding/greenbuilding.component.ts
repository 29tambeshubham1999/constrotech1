import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greenbuilding',
  templateUrl: './greenbuilding.component.html',
  styleUrls: ['./greenbuilding.component.css']
})
export class GreenbuildingComponent implements OnInit {
  public h1:any="GREEN BUILDING";
  public h2:any="Green building (also known as green construction or sustainable building) refers to both a structure and the application of processes that are environmentally responsible and resource-efficient throughout a building's life-cycle: from planning to design, construction, operation, maintenance, renovation, and demolition.[1] This requires close cooperation of the contractor, the architects, the engineers, and the client at all project stages.[2] The Green Building practice expands and complements the classical building design concerns of economy, utility, durability, and comfort.[3] In doing so, the three dimensions of sustainability, i.e., planet, people and profit across the entire supply chain need to be considered.";
  public p1:any="Leadership in Energy and Environmental Design (LEED) is a set of rating systems for the design, construction, operation, and maintenance of green buildings which was developed by the U.S. Green Building Council. Other certificate systems that confirm the sustainability of buildings are the British BREEAM (Building Research Establishment Environmental Assessment Method) for buildings and large-scale developments or the DGNB System (Deutsche Gesellschaft für Nachhaltiges Bauen e.V.) which benchmarks the sustainability performance of buildings, indoor environments and districts. Currently, the World Green Building Council is conducting research on the effects of green buildings on the health and productivity of their users and is working with the World Bank to promote Green Buildings in Emerging Markets through EDGE (Excellence in Design for Greater Efficiencies) Market Transformation Program and certification.[5] There are also other tools such as Green Star in Australia, Global Sustainability Assessment System (GSAS) used in the Middle East and the Green Building Index (GBI) predominantly used in Malaysia.";
  public p2:any="Building information modeling (BIM) is a process involving the generation and management of digital representations of physical and functional characteristics of places. Building information models (BIMs) are files (often but not always in proprietary formats and containing proprietary data) which can be extracted, exchanged, or networked to support decision-making regarding a building or other built asset. Current BIM software is used by individuals, businesses, and government agencies who plan, design, construct, operate and maintain diverse physical infrastructures, such as water, refuse, electricity, gas, communication utilities, roads, railways, bridges, ports, and tunnels.";
  public p3:any="Although new technologies are constantly being developed to complement current practices in creating greener structures, the common objective of green buildings is to reduce the overall impact of the built environment on human health and the natural environment by:";
  public p4:any="1. Efficiently using energy, water, and other resources ";
  public p5:any="2. Protecting occupant health and improving employee productivity (see healthy building) ";
  public p6:any=" 3. Reducing waste, pollution, and environmental degradationbr";
  constructor() { }

  ngOnInit(): void {
  }

}
