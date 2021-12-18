import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  date=[] as any;

  constructor(private ls:DatosService) {
      this.date=this.ls.obtenerDatosBusqueda();
      console.log(this.date);
     }

  ngOnInit(): void {
  }

}
