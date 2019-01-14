import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  frase: any = {
    msj: 'A grandes males, grandes soluciones',
    author: 'Anónimo'
  };

  show = true;

  personajes: string[] = ['Goku', 'Vegeta', 'Gohan', 'Cell', 'Freezer', 'Mr. Satán'];

  constructor() { }

  ngOnInit() {
  }

}
