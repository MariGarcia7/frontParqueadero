import { Vehiculo } from './../listar-vehiculos/vehiculo';
import { RetirarVehiculoService } from './retirar-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-retirar-vehiculos',
  templateUrl: './retirar-vehiculos.component.html',
  styleUrls: ['./retirar-vehiculos.component.css']
})

export class RetirarVehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];
  private vehiculo: Vehiculo = new Vehiculo();

  constructor(private retirarvehiculo: RetirarVehiculoService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.retirarvehiculo.getVehiculos().subscribe(
      (vehiculos) => { this.vehiculos = vehiculos },
      error => {
        console.log(error)
      }
    );
  }

  update(vehiculo:Vehiculo){
    debugger;
    this.retirarvehiculo.update(vehiculo)
      .subscribe(vehiculo => this.router.navigate(['/ticket']),
        error => {
          console.log(error)
          swal ('Ups!', 'Retiro exitoso','success');
        }
      )
  }
}
