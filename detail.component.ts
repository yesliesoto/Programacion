import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
   id = '' as any;
   item: any;
   constructor(private route: ActivatedRoute, private ls: DatosService) { }
   ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.buscar();
   }
   buscar() {
    const datos = this.ls.obtenerDatos();
    this.item = datos.filter(x => x.id == this.id);
    if (this.item.length > 0) {
     this.item = this.item[0];
    }
   }
  }
  
