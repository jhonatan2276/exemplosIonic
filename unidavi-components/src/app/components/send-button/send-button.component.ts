import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-send-button',
  templateUrl: './send-button.component.html',
  styleUrls: ['./send-button.component.scss']
})
export class SendButtonComponent implements OnInit {

  @Input() textoDoBotao: string;
  @Output() clickQueSeraOuvidoExternamente: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  clickDoComponente() {
    console.log('click do componente');
    this.clickQueSeraOuvidoExternamente.emit(null);
  }

}
