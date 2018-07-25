import { Router, ActivatedRoute } from '@angular/router';
import { TicketService } from './ticket.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../listar-vehiculos/vehiculo';
import { PARAMETERS } from '../../../../node_modules/@angular/core/src/util/decorators';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',

})
export class TicketComponent implements OnInit {

  private vehiculo:Vehiculo=new Vehiculo()

  constructor(private ticketService: TicketService,
  private router:Router,
  private activateRoute:ActivatedRoute) { }

  ngOnInit() {
  }

}
