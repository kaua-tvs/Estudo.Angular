import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/Common';

import { CursosComponent } from './cursos.component';
import { CursosDetalhe } from './cursos/cursos-detalhe/cursos-detalhe.component';
import { CursosService } from '.cursos.service';

@NgModule({
  imports:[
    CommonModule //quais modulos queremos importar
  ],
  declarations:[
    CursosComponent
    // CursosDetalhe
  ],
  exports:[
    CursosComponent//quais sao as declaração do modulo do declarations
    // CursosDetalhe
  ],
  providers:[//colocar os serviços que vão ser usados
    CursosService
  ]
})

export class CursosModule{}