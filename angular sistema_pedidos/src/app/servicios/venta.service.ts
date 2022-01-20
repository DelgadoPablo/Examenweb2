import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class VentaService {
  API_URL = 'http://localhost:7000/api/v2'

  constructor(private http: HttpClient) { }

  getVentas(){
    return this.http.get(`${this.API_URL}/ventas`)
  }

  add(venta : any){
    return this.http.post(`${this.API_URL}/ventas/add`,venta)
  }

  getventa(id : string){
    return this.http.get(`${this.API_URL}/ventas/${id}`)
  }

  updateventa(id:string,venta : any){
    return this.http.put(`${this.API_URL}/ventas/update/${id}`,venta)
  }

  deleteventa(id:string){
    return this.http.delete(`${this.API_URL}/ventas/delete/${id}`)
  }

}
