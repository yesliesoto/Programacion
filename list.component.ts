import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  datos = [] as any;

  /*constructor(private ls: DatosService) {
      this.datos = this.ls.obtenerDatos();
      console.log(this.datos);

  }*/
  constructor(private ls: DatosService) {
      // Nos suscribimos para recibir datos de la API
      this.ls.obtenerDatosAPI().subscribe( (res: any) => {
       // Obtenemos respues de la API
       this.datos = res;
      });
     }
    
    

  ngOnInit(): void {
  }

}
