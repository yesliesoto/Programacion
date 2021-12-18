import { Component, OnInit } from '@angular/core';
import { DatosService } from '../registro/datos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
   texto = '';
   resultado=[] as any;
   constructor(private ls: DatosService) { }
   ngOnInit(): void {
   }
   buscar() {
    const datos = this.ls.obtenerDatos();
    this.resultado = datos.filter( x => x.title.includes(this.texto));
    console.log('Resultado de búsqueda:',this.resultado);
    this.ls.DatosBuscados(this.resultado);
   }
  }
  
