import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JugadorInterface } from '../Models/jugadorInterface';


@Injectable({
  providedIn: 'root'
})
export class JugadorService {

  API_URI='http://localhost:3000/jugadores';

  constructor(private http: HttpClient) { }

  headers: HttpHeaders = new HttpHeaders({
    "Content-Type": "application/json"
  })

  CargarDatos(): any{
    return this.http.get(`${this.API_URI}/all`);
  }

  SeleccionJugador(national: string): any{
    return this.http.get(`${this.API_URI}/jugadores/seleccion/${national}`);
  }

  SetUsuarioActual(jugador: JugadorInterface){
    let jugador_string = JSON.stringify(jugador);
    localStorage.setItem('opcion', jugador_string);
  }

  getUsuarioActual(){
    let opcion_Actual = localStorage.getItem('opcion');
    if (opcion_Actual) {
      let opcion_json = JSON.parse(opcion_Actual);
      return opcion_json;
    } else {
      return null;
    }
  }
}
