import { Vehiculo } from './../listar-vehiculos/vehiculo';
import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '../../../../node_modules/@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from '../../../../node_modules/rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RetirarVehiculoService {

  private urlEndPoint: string = 'http://localhost:8090/vehiculo';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })
  
  constructor(private http: HttpClient) { }

  getVehiculo(placa):Observable<Vehiculo>{
    return this.http.get<Vehiculo>(`${this.urlEndPoint}/${placa}`)
  }

  update(vehiculo:Vehiculo):Observable<Vehiculo>{
    return this.http.put<Vehiculo>(`${this.urlEndPoint}/${vehiculo.placa}`,
    vehiculo,{headers:this.httpHeaders})
  }
  
}
