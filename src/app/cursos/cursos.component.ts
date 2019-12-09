import { CursosService } from './cursos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit{

  nomePortal: string;
  cursos :string[];

  construtor(cursoService: CursosService){

    // var service = new CursosService();
    this.cursos = cursoService.getCursos();
  }

  ngOnInit(){

  }
} // onde vai toda logica do projeto js ...