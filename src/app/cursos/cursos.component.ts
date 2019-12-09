import { Component } from '@angular/core';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})

export class CursosComponent implements OnInit{

  AceitarQualquerCoisa: any;

  nomePortal: string = 'http://loiane.training';
  cursos :string[] = ['java', 'ext js', 'angular']
  construtor(){
    this.AceitarQualquerCoisa = 5;
    this.AceitarQualquerCoisa = "sdfds0"

    this.nomePortal = 'http://loiane.training';
  }

  ngOnInit(){
    
  }
} // onde vai toda logica do projeto js ...