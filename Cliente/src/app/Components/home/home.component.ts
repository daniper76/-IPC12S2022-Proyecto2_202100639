import { Component, OnInit } from '@angular/core';
import { JugadorService } from 'src/app/Services/jugador.service';
import { JugadorInterface } from 'src/app/Models/jugadorInterface';
import { UsuarioInterface } from 'src/app/Models/usuarioInterface';
import { UsuariosService } from 'src/app/Services/usuarios.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuario: UsuarioInterface;
  datosJugadores: JugadorInterface[]=[];
  datosSeleccion: JugadorInterface[]=[];
  datosNombre: JugadorInterface[]=[];
  datosRegion: JugadorInterface[]=[];
  opcion: string="";

  constructor(public jugadorService: JugadorService, private usuarioService: UsuariosService) { }

  ngOnInit(): void {
    this.ObtenerJugadores();
    this.ObtenerDatosUsuarioLoggeado();
  }

  ObtenerDatosUsuarioLoggeado(){
    this.usuario= this.usuarioService.getUsuarioActual();
  }

  ObtenerJugadores(){
    this.jugadorService.CargarDatos().subscribe(async (res)=>
    {
      let datos: any=res;
      this.datosJugadores=datos;
      console.log("Listado de Jugadores: ");
      console.log(this.datosJugadores);
    },

    err => console.log(err));
    
  }

  ObtenerJugadoresSeleccion(){
    this.jugadorService.CargarDatos().subscribe(async (res)=>
    {
      let datos: any=res;
      console.log(this.opcion);
      for (const jugador of datos) {
        if (jugador.seleccion == this.opcion) {
            this.datosSeleccion.push(jugador);
        }
        this.datosJugadores=this.datosSeleccion;
    }
    },

    err => console.log(err));
  }

  ObtenerJugadoresNombre(){
    this.jugadorService.CargarDatos().subscribe(async (res)=>
    {
      let datos: any=res;

      for (const jugador of datos) {
        if (jugador.nombre == this.opcion) {
            this.datosNombre.push(jugador);
        }
        this.datosJugadores=this.datosNombre;
    }
    },

    err => console.log(err));
  }

  ObtenerJugadoresRegion(){
    this.jugadorService.CargarDatos().subscribe(async (res)=>
    {
      let datos: any=res;

      for (const jugador of datos) {
        if (jugador.region == this.opcion) {
            this.datosRegion.push(jugador);
        }
        this.datosJugadores=this.datosRegion;
       
    }
    },

    err => console.log(err));
  }

  ObtenerJugadoresAll(){
    this.jugadorService.CargarDatos().subscribe(async (res)=>
    {
      let datos: any=res;
      this.datosJugadores=datos;
    },

    err => console.log(err));
    
  }


}
