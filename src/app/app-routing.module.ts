import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultoriaComponent } from './views/consultoria/consultoria.component';
import { NuevaPreguntaComponent } from './views/nueva-pregunta/nueva-pregunta.component';
import { PreguntasComponent } from './views/preguntas/preguntas.component';
import { InicioComponent } from './views/inicio/inicio.component';



const routes: Routes = [
  {path: 'consultoria', component: ConsultoriaComponent},
  {path: 'nuevapregunta', component: NuevaPreguntaComponent},
  {path: 'preguntas', component: PreguntasComponent},
  {path: 'inicio', component: InicioComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
