import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DatosService {
  URL_API = 'https://jsonplaceholder.typicode.com/photos';
  constructor(private http: HttpClient) { }

  guardarDatos(datos: any[]) {
    localStorage.setItem('datos', JSON.stringify(datos) );
  }

  obtenerDatos(): any[] {
    const datos = localStorage.getItem('datos');
      if (datos) {
        return JSON.parse(datos);
      }    
    return []; 
  }
   obtenerDatosBusqueda(): any[] {
    const datos = localStorage.getItem('search');
    if (datos) {
     return JSON.parse(datos);
    }
    return [];
   }
  
   
  
   DatosBuscados(datos:any[]){
localStorage.setItem('search',JSON.stringify(datos));
   }
   obtenerDatosAPI() {
      return this.http.get(this.URL_API);
    }
     guardarDatosAPI(item: any) {
      return this.http.post(this.URL_API, item);
     }
    

}
