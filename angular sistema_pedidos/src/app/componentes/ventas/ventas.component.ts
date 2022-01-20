import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.css']
})
export class VentasComponent implements OnInit {

  listaventas : any = []

  constructor(private ventaService:VentaService) { }

  ngOnInit(): void {
    this.buscar()
  }

  buscar(){
    this.ventaService.getVentas().pipe(
      tap(res => {
        this.listaventas=res
      })
    ).subscribe()
  }

  eliminar(venta_id:any){
    this.ventaService.deleteventa(venta_id).pipe(
      tap(res=>{
        this.buscar()
      })
    ).subscribe()
  }
}
