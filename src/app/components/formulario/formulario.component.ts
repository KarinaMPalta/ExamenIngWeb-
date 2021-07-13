import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms'

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  formulario:FormGroup;
  nombre:AbstractControl;
  pais:AbstractControl;
  observacion:AbstractControl;
  lista:Array<String>=[];

  constructor(public fb:FormBuilder ) {
    this.formulario=this.fb.group({
      nombre:['',Validators.required],
      pais:['',Validators.required],
      observacion:['',Validators.required]
    });
    this.nombre=this.formulario.controls["nombre"];
    this.pais=this.formulario.controls["pais"];
    this.observacion=this.formulario.controls["observacion"]
   }

  ngOnInit(): void {
  }

  Crear(){
    this.lista.push(this.formulario.get("nombre")?.value);
    this.lista.push(this.formulario.get("pais")?.value);
    this.lista.push(this.formulario.get("observacion")?.value);
    console.log(this.lista);
  }
}
