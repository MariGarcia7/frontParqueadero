import { TicketService } from './ticket.service';
import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../listar-vehiculos/vehiculo';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',

})
export class TicketComponent implements OnInit {

  constructor(private ticketService: TicketService,
    private router: Router,
    private activateRoute: ActivatedRoute) { }

  private vehiculo: Vehiculo = new Vehiculo();

  ngOnInit() {
  }
}
