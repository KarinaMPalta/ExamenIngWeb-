import { Component, OnInit } from '@angular/core';
import { Libros, listaLibros} from "../../interfaces/libros"

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.scss']
})
export class LibrosComponent implements OnInit {

  Lista=listaLibros;
  constructor() { }

  ngOnInit(): void {
  }

}
