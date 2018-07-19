import { Vehiculo } from './vehiculo';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { map } from 'rxjs/operators';
;

@Injectable({
  providedIn: 'root'
})
export class ListarVehiculosService {

  private urlEndPoint:string='http://localhost:8090/vehiculo/historial';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http: HttpClient) { }

  getVehiculos():Observable<Vehiculo[]>{
    return this.http.get(this.urlEndPoint).pipe(map(response => response as Vehiculo[]));
  }
}
