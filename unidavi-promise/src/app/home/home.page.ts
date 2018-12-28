import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  resultado = 0;

  calcula() {
    let valor = 100;
    let valorCorrigido = 0;

    // valorCorrigido = this.calcularJuros(valor);

    // this.calcularJuros(valor);
    // this.calcularMulta(valor);

    // this.calcularJuros(valor)
    //   .then((result: number) => {
    //     valorCorrigido = result;
    //     this.resultado = valorCorrigido;
    //   });

    // this.calcularMulta(valor)
    //   .then((result: number) => {
    //     valorCorrigido = result;
    //     this.resultado = valorCorrigido;
    //   });



    // this.calcularJuros(valor)
    //   .then((result: number) => {
    //     valorCorrigido = result;
    //     this.resultado = valorCorrigido;
    //   });

    // this.calcularMulta(valorCorrigido)
    //   .then((result: number) => {
    //     valorCorrigido = result;
    //     this.resultado = valorCorrigido;
    //   });




    // this.calcularJuros(valor)
    //   .then((result: number) => {
    //     valorCorrigido = result;

    //     this.calcularMulta(valorCorrigido)
    //       .then((result2: number) => {
    //         valorCorrigido = result2;
    //         this.resultado = valorCorrigido;
    //       });
    //   });


    let jurosPromise = this.calcularJuros(valor);
    let multaPromise = this.calcularMulta(valor);

    Promise.all([jurosPromise, multaPromise])
      .then((result: number[]) => {
        valorCorrigido = result[0] + result[1];
        this.resultado = valorCorrigido;
      });
  }

  calcularJuros(valorBase: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (valorBase > 0) {
        let result = 0;
        let juros = 0.1;

        result = valorBase + (valorBase * juros);
        resolve(result);
      } else {
        reject('O valor não pode ser zero ou menor que zero');
      }
    });
  }

  calcularMulta(valorBase: number): Promise<number> {
    return new Promise((resolve, reject) => {
      if (valorBase > 0) {
        let result = 0;
        let multa = 50;

        result = valorBase + multa;
        resolve(result);
      } else {
        reject('O valor não pode ser zero ou menor que zero');
      }
    });
  }

}
