import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/Services/usuarios.service';
import { UsuarioInterface } from 'src/app/Models/usuarioInterface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  nombreUsuario: string='';
  passwordUsuario: string='';
  datosUsuarios: UsuarioInterface[]=[];

  constructor(private usuariosService: UsuariosService, public router: Router) { }

  ngOnInit(): void {
    this.CargarDatos();
  }

  CargarDatos(){
    this.usuariosService.CargarDatosUsuarios().subscribe(async (res) =>
    {
      let datos: any = res;
      this.datosUsuarios = datos;
    },
    err => console.log(err));
  }

  Login(){
    if(this.nombreUsuario!="" && this.passwordUsuario!=""){
      for (const usuario of this.datosUsuarios) {
        if(usuario.usuario==this.nombreUsuario && usuario.password==this.passwordUsuario){
          this.usuariosService.SetUsuarioActual(usuario);
          this.router.navigate(['paginaPrincipal']);
          break;
        }
        
      }
    }else{

        if( this.nombreUsuario=="" && this.passwordUsuario==""){
          alert("Contraseña o Usurario Equivocada");
        }else{

              alert("Contraseña o Usuario Equivocada");
            }
             
    
    }
  }
  
}
