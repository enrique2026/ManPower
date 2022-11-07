import { Component, OnInit } from '@angular/core';
import { PropertiesDashboardItem } from '../../components/dashboard-item/dashboard-item.component';
import { DashboardItemService } from '../../services/dashboardItem/dashboard-item.service';
import { AuthService } from '../login/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DashboardItemService]
})
export class DashboardComponent implements OnInit {

  registroCPE:PropertiesDashboardItem[] | undefined;
  serviciosIntegracion:PropertiesDashboardItem[] | any;
  administrador:PropertiesDashboardItem[] | undefined;
  maestros:PropertiesDashboardItem[] | undefined;

  constructor(
    private readonly dashboardItemService:DashboardItemService,private readonly authService:AuthService

  ) {    
    
    this.registroCPE=this.dashboardItemService.getItemsRegistroCPE()
    this.serviciosIntegracion=this.dashboardItemService.getServiciosIntegracion()    
    this.administrador=this.dashboardItemService.getAdministrador() 
    this.maestros=this.dashboardItemService.getMaestros()

  }

  ngOnInit(): void {
  }

}
