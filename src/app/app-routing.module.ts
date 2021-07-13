import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component'
import { LibrosComponent} from '../app/components/libros/libros.component'
import { FormularioComponent} from '../app/components/formulario/formulario.component'
import { RespuestaComponent} from '../app/components/respuesta/respuesta.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'libros', component:LibrosComponent},
  {path: 'formulario', component:FormularioComponent},
  {path: 'respuesta', component:RespuestaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
