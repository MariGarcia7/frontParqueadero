import { Injectable } from '@angular/core';
import { Observable } from '../../../../node_modules/rxjs';
import { Vehiculo } from '../listar-vehiculos/vehiculo';
import { HttpClient, HttpHeaders, } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class IngresarVehiculoService {

  private urlEndPoint: string = 'http://localhost:8090/vehiculo';
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' })

  constructor(private http: HttpClient) { }

  public create(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(this.urlEndPoint, vehiculo, { headers: this.httpHeaders })
  }
}
