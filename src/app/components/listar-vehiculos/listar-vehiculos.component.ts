import { ListarVehiculosService } from './listar-vehiculos.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from './vehiculo';

@Component({
  selector: 'app-listar-vehiculos',
  templateUrl: './listar-vehiculos.component.html',

})
export class ListarVehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];

  constructor(private vehiculoService: ListarVehiculosService) { }

  ngOnInit() {
    this.vehiculoService.getVehiculos().subscribe(
      (vehiculos) => { this.vehiculos = vehiculos },
      error => {
        console.log(error)
      }
    );
  }

}
