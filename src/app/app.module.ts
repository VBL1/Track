import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConsultoriaComponent } from './views/consultoria/consultoria.component';
import { PreguntasComponent } from './views/preguntas/preguntas.component';
import { NuevaPreguntaComponent } from './views/nueva-pregunta/nueva-pregunta.component';
import { InicioComponent } from './views/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultoriaComponent,
    PreguntasComponent,
    NuevaPreguntaComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
