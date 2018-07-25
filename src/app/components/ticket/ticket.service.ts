import { Vehiculo } from './../listar-vehiculos/vehiculo';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';


@Injectable({
  providedIn: 'root'
})
export class TicketService {

  private urlEndPoint: string = 'http://localhost:8090/vehiculo';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
  constructor(private http: HttpClient) { }

  getCliente(Vehiculo):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(this.urlEndPoint);


  }

}
