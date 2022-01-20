import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  detalle_productos=""
  descripcion_pedido=""
  producto_solicitado=""
  num_pedido=0
  fecha_pedido=""
  hora_pedido=""
  total=0
  comision=0
  fecha_entrega=""


  constructor(private ventaService:VentaService) { }

  ngOnInit(): void {

  }

  agregar(){
    let venta = {
      detalle_productos : this.descripcion_pedido,
      descripcion_pedido : this.descripcion_pedido,
      producto_solicitado : this.producto_solicitado,
      num_pedido : this.num_pedido,
      fecha_pedido : this.fecha_pedido,
      hora_pedido : this.hora_pedido,
      total : this.total,
      comision : this.comision,
      fecha_entrega : this.fecha_entrega
    }
    this.ventaService.add(venta).pipe(
      tap(res=>{
        console.log(res)
      })
    ).subscribe()

  }

}
