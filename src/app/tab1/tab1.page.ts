import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false,
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit(){
    let numero = 20;
    debugger;
    numero = 30;
    numero = numero + 10;
    numero = 0;
    console.log(numero);
  }

}
