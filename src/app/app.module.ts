import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CreateComponent } from './pages/usuario/create/create.component';
import { UpdatePassComponent } from './pages/usuario/update-pass/update-pass.component';
import { FacturacionComponent } from './pages/facturacion/facturacion/facturacion.component';
import { FacItemComponent } from './pages/facturacion/fac-item/fac-item/fac-item.component';
import { CargarDocComponent } from './pages/facturacion/cargar-doc/cargar-doc/cargar-doc.component';

//import {NgxEncryptCookieService} from "ngx-encrypt-cookie";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardItemComponent,
    DashboardComponent,
    UsuarioComponent,
    CreateComponent,
    UpdatePassComponent,
    FacturacionComponent,
    FacItemComponent,
    CargarDocComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
