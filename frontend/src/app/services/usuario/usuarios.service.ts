import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Usuario } from "src/app/models/usuarios";


@Injectable({

    providedIn: 'root'

    
})
export class UsuarioService{
    url= "http://54.219.51.93:3600/guardar-usuario/";
    urlgetUsuario= "http://54.219.51.93:3600/getUsuario/";
    urlPregunta= "http://54.219.51.93:3600/verificarPregunta/";
    urlconfigurarusuario ="http://54.219.51.93:3600/configurar-usuario/"; 
    urlForgotPass = "http://54.219.51.93:3600/restablecer/"
    constructor(
        private http: HttpClient
    ){}
    verificarUsuario(usuario: Usuario): Observable <any>{
        return this.http.post(this.url, usuario);
    }
    getUsuario(cedula:object): Observable <any>{
        return this.http.post(this.urlgetUsuario, cedula);
    }
    verificarPregunta(pregunta: Object): Observable <any>{
        return this.http.post(this.urlPregunta, pregunta);
    }
    configurarUsuario(usuario: object): Observable<any> {
        return this.http.post(this.urlconfigurarusuario, usuario);
    }
    correoTemporales(usuario: Object):Observable<any>{
        return this.http.post(this.urlForgotPass, usuario);
    }
}