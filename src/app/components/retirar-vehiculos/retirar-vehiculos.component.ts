import { Vehiculo } from './../listar-vehiculos/vehiculo';
import { RetirarVehiculoService } from './retirar-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-retirar-vehiculos',
  templateUrl: './retirar-vehiculos.component.html',
})

export class RetirarVehiculosComponent implements OnInit {

  vehiculos: Vehiculo[];
  private ticket: Vehiculo ;

  constructor(private retirarvehiculo: RetirarVehiculoService,
    private router: Router,
    private activateRoute: ActivatedRoute) {

      this.ticket=new Vehiculo();
     }

  ngOnInit() {
    this.retirarvehiculo.getVehiculos().subscribe(
      (vehiculos) => { this.vehiculos = vehiculos },
      error => {
        console.log(error)
      }
    );
  }

  update(vehiculo:Vehiculo){
    this.retirarvehiculo.update(vehiculo)
      .subscribe(vehiculo => this.ticket = vehiculo);
      console.log(this.ticket) 
  }

  public recargar(){
    window.location.reload();
  }
}
