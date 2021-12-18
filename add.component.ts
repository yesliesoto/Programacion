import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  formRegistro = new FormGroup({
     albumId: new FormControl('', [Validators.required]),
     id: new FormControl('', [Validators.required]),
     title: new FormControl('', [
       Validators.required, Validators.minLength(2)]),
     });
   get albumId(){ return this.formRegistro.get('albumId'); }
  get id(){ return this.formRegistro.get('id'); }
  get title(){ return this.formRegistro.get('title'); }

 

  constructor(private ls: DatosService) { }

  ngOnInit(): void {
  }
 /* agregar() {
     let datos = this.ls.obtenerDatos();
      datos.push({
      albumId: this.albumId?.value,
      id: this.id?.value,
      title: this.title?.value
     });
      this.ls.guardarDatos(datos);
      this.formRegistro.reset();
      Swal.fire(
       'Datos guardados correctamente!',
       '',
       'success'
      );
     }*/
     agregar() {
       const item = {
        userId: this.albumId?.value,
        id: this.id?.value,
        title: this.title?.value,
       };
       this.ls.guardarDatosAPI(item).subscribe( (res: any) =>{
        if (res) {
         this.formRegistro.reset();
         Swal.fire(
          'Datos guardados correctamente!',
          '',
          'success'
         );
        }
       });
      }
      
    
    
}
