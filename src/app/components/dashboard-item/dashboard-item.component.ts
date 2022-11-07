import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

export interface PropertiesDashboardItem {
  id:number,
  e:boolean;
  icon:string;
  topTitle:string;
  topSubTitle:string;
  bottomText:string;
  colorIcon:string;
  path?:string;

}

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.css']
})
export class DashboardItemComponent implements OnInit {

  @Input()
  properties:PropertiesDashboardItem;

  constructor(private router:Router) {

    this.properties={
      id:0,
      e:false,
      icon:"fas fa-exclamation-circle",
      topTitle:"not found",
      topSubTitle:"not found",
      bottomText:"not found",
      colorIcon:"red",
      path:""


    }

  }

  ngOnInit(): void {
  }

 

}
