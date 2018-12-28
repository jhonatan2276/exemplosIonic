import { Component, OnInit, OnDestroy, DoCheck,
  AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.page.html',
  styleUrls: ['./example.page.scss'],
})
export class ExamplePage implements OnInit, DoCheck,
AfterContentInit, AfterContentChecked,
AfterViewInit, AfterViewChecked,
OnDestroy  {

  constructor() { }

  ngOnInit()    { console.log ('ngOnInit'); }

  ngOnDestroy() { console.log ('ngOnDestroy'); }

  ngDoCheck() { console.log ('ngDoCheck'); }

  ngAfterContentInit() { console.log ('ngAfterContentInit');  }

  ngAfterContentChecked() { console.log ('ngAfterContentChecked'); }

  ngAfterViewInit() { console.log ('ngAfterViewInit'); }

  ngAfterViewChecked() { console.log ('ngAfterViewChecked'); }

  ionViewDidLoad() {
    // sqlite
    console.log('ionViewDidLoad');
  }

  ionViewWillEnter() {
    // sincrono - cuidado
    console.log('ionViewWillEnter');
  }

  ionViewDidEnter() {
    // sincrono - cuidado
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    // sincrono - cuidado
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    // sincrono - cuidado
    console.log('ionViewDidLeave');
  }

  ionViewWillUnload() {
    // sincrono - cuidado
    console.log('ionViewWillUnload');
  }

  ionViewCanEnter(): boolean {
    // sincrono - cuidado
    console.log('ionViewCanEnter');
    return true;
  }

  ionViewCanLeave(): boolean {
    console.log('ionViewCanLeave');
    return true;
  }

}
