import { RetirarVehiculoService } from './retirar-vehiculo.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../listar-vehiculos/vehiculo';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';


@Component({
  selector: 'app-retirar-vehiculos',
  templateUrl: './retirar-vehiculos.component.html',
  styleUrls: ['./retirar-vehiculos.component.css']
})

export class RetirarVehiculosComponent implements OnInit {

  private vehiculo: Vehiculo = new Vehiculo();

  constructor(private retirarvehiculo: RetirarVehiculoService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
  }

  cargarVehiculo(): void {
    this.activateRoute.params.subscribe(params => {
      let placa = params['placa']
      if (placa) {
        this.retirarvehiculo.getVehiculo(placa).subscribe(vehiculo => this.vehiculo = vehiculo)
      }
    })
  }
  
  update():void{
    this.retirarvehiculo.update(this.vehiculo)
    .subscribe(vehiculo => this.router.navigate(['/retirar']),
    error => {
      console.log(error)
    }
  
  )
  }
  

}
