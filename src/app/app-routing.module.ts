import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsuarioComponent } from './pages/usuario/usuario.component';
import { CreateComponent } from './pages/usuario/create/create.component';
import { UpdatePassComponent } from './pages/usuario/update-pass/update-pass.component';
import { FacturacionComponent } from './pages/facturacion/facturacion/facturacion.component';



const routes: Routes = [
  {path:'',component: LoginComponent},
  
  {path:'dashboard',component: DashboardComponent},
  {path:'usuario',component: UsuarioComponent},
  {path:'create',component: CreateComponent},
  {path:'pass',component: UpdatePassComponent},
  {path:'fac',component: FacturacionComponent},
  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
