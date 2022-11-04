import { Component, Input, OnInit } from '@angular/core';
import { JugadorInterface } from 'src/app/Models/jugadorInterface';

@Component({
  selector: 'app-tarjetas',
  templateUrl: './tarjetas.component.html',
  styleUrls: ['./tarjetas.component.css']
})
export class TarjetasComponent implements OnInit {

  @Input() datoJugadorEspecifico: JugadorInterface;

  constructor() { }

  ngOnInit(): void {
    console.log("---------------------");
    console.log(this.datoJugadorEspecifico);
    console.log("---------------------");
  }

}
