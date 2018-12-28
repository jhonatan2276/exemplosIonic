import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-semd-button',
  templateUrl: './semd-button.component.html',
  styleUrls: ['./semd-button.component.scss']
})
export class SemdButtonComponent implements OnInit {

  @Input() textoDoBotao : string;
  @Output() cliqueSeraOuvidoExternamente : EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  cliqueComponente() {
    console.log("Clique do Componente")
    this.cliqueSeraOuvidoExternamente.emit(null)
  }
}
