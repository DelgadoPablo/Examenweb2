import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PedidoService } from 'src/app/servicios/pedido.service';
import { VentaService } from 'src/app/servicios/venta.service';

@Component({
  selector: 'app-transferir',
  templateUrl: './transferir.component.html',
  styleUrls: ['./transferir.component.css']
})
export class TransferirComponent implements OnInit {

  listapedidos : any = []
  venta = {
    datei : "",
    datef:""
  }

  det_venta = {
    detalle_productos:"",
    descripcion_pedido:"",
    producto_solicitado:"",
    num_pedido:0,
    fecha_pedido : "",
    hora_pedido:"",
    total : 0,
    comision : 0,
    fecha_entrega : ""
  }

  datei: any;
  datef : any;

  constructor(private pedidoService:PedidoService,private ventaService:VentaService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.venta.datei=this.datei;
    this.venta.datef=this.datef;
    this.pedidoService.getPedidos(this.venta).pipe(
      tap(res => {
        this.listapedidos=res
      })
    ).subscribe()
  }

  transferir(){
    for (let pedido of this.listapedidos){
      this.det_venta.detalle_productos = pedido.detalle_productos
      this.det_venta.descripcion_pedido = pedido.descripcion_pedido
      this.det_venta.producto_solicitado = pedido.producto_solicitado
      this.det_venta.num_pedido=pedido.num_pedido
      this.det_venta.fecha_pedido =  pedido.fecha_pedido
      this.det_venta.hora_pedido= pedido.hora_pedido
      this.det_venta.total = pedido.total
      this.det_venta.comision = 0
      this.det_venta.fecha_entrega = ""

      this.ventaService.add(this.det_venta).pipe(
        tap(res => {
          console.log(res)
        })
      ).subscribe()
    }
  }

}
