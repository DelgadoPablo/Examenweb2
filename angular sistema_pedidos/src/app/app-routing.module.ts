import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';
import { TransferirComponent } from './componentes/transferir/transferir.component';
import { VentasComponent } from './componentes/ventas/ventas.component';

const routes: Routes = [

  {
    path:'',
    redirectTo: '/transferencia',
    pathMatch:'full'
  },

  {
    path:'transferencia',
    component: TransferirComponent
  },

  {
    path:'agregar',
    component: AgregarComponent
  },
  {
    path:'ventas',
    component: VentasComponent
  },
  {
    path:'editar/:id',
    component: EditarComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
