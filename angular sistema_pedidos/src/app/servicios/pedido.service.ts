import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  API_URL = 'http://localhost:7000/api/v2'
  constructor(private http: HttpClient) { }

  getPedidos(venta : any){
    return this.http.post(`${this.API_URL}/pedidos/getbydate`,venta)
  }

}
