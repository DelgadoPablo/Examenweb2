import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'
//MODULO PARA EL FORMULARIO
import { FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { TransferirComponent } from './componentes/transferir/transferir.component';
import { VentasComponent } from './componentes/ventas/ventas.component';
import { AgregarComponent } from './componentes/agregar/agregar.component';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TransferirComponent,
    VentasComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
