import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  peso: number = 0;
  altura: number = 0;
  imc: number = 0;

  limparCampos() {
    this.peso = 0;
    this.altura = 0;
    this.imc = 0;
  }
  

  calcularIMC() {
    if (this.peso && this.altura) {
      this.imc = this.peso / (this.altura * this.altura);
    } else {
      this.imc = 0;
    }
  }
}
