import { Injectable } from '@angular/core';

@Injectable()//decorator A CLASSE PODE SER INJETADA EM OUTRA CLASSE   Q
export class CursosService{
  
  constructor(){}
  
  getCursos(){
      return ['Java', 'Ext Js', 'Angular'];
  }//tira o retorno da variavel do component e deixa no service

}