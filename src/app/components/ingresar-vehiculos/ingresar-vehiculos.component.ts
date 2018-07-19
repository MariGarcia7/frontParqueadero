import { Vehiculo } from './../listar-vehiculos/vehiculo';
import { Component, OnInit } from '@angular/core';
import { IngresarVehiculoService } from './ingresar-vehiculo.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2'

@Component({
  selector: 'app-ingresar-vehiculos',
  templateUrl: './ingresar-vehiculos.component.html',
  styleUrls: ['./ingresar-vehiculos.component.css'],

})

export class IngresarVehiculosComponent implements OnInit {

  private vehiculo: Vehiculo = new Vehiculo();

  constructor(private ingresarVehiculo: IngresarVehiculoService, private router: Router) { }

  ngOnInit() {
  }

  public save(): void {
    this.ingresarVehiculo.create(this.vehiculo).subscribe(
      vehiculo => {
        this.router.navigate(['/retirar']),
        swal('Nuevo vehiculo', `Vehiculo ${vehiculo.placa} creado con éxito!`, 'success'),
        error => {
          console.log(error)
        }
      }
    );

  }

}
