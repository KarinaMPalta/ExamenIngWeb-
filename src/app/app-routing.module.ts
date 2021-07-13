import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../app/components/home/home.component'
import { LibrosComponent} from '../app/components/libros/libros.component'
import { FormularioComponent} from '../app/components/formulario/formulario.component'

const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'libros', component:LibrosComponent},
  {path: 'formulario', component:FormularioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
