import { Component } from '@angular/core';
@Component({
  selector: 'meu-primeiro-component',/*Criação de Tags Html, para a utilização posterior*/
  template: `<p> Meu Primeiro Component com Angular2 </p>` /*Template Literal é um template da string, tbm podemos colocar CSS, precisamos usar esse component em outra classe*/
})
export class MeuPrimeiroComponent{} /*O export ele deixa a classe visivel para outros enxergarem (public class .. C#)*/