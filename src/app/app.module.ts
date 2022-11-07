import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardItemComponent } from './components/dashboard-item/dashboard-item.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
//import {NgxEncryptCookieService} from "ngx-encrypt-cookie";


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardItemComponent,
    DashboardComponent
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
