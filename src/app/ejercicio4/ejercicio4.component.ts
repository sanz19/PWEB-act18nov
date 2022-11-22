import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  templateUrl: './ejercicio4.component.html',
  styleUrls: ['./ejercicio4.component.css']
})
export class Ejercicio4Component implements OnInit {

  departamento: string = "0";
  precioArticulo: number = 0;
  eMoney: string = "0";
  puntosTotal: number = 0;
  saldo = 0;
  puntos = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onSelected(value:string): void {
		this.departamento = value;
	}

  calcular() {
    const DepaElectro = [20, 6];
    const DepaJardine = [15, 4];
    const DepaHerrami = [12, 3];
    const DepaLineaBl = [10, 2];

    switch(parseInt(this.departamento)) {
        case 0: alert("Seleccione un departamento."); break;
        case 1: this.saldo = (DepaElectro[0]/100)*this.precioArticulo ; this.puntos = this.precioArticulo*DepaElectro[1]; break;
        case 2: this.saldo = (DepaJardine[0]/100)*this.precioArticulo ; this.puntos = this.precioArticulo*DepaJardine[1]; break;
        case 3: this.saldo = (DepaHerrami[0]/100)*this.precioArticulo ; this.puntos = this.precioArticulo*DepaHerrami[1]; break;
        case 4: this.saldo = (DepaLineaBl[0]/100)*this.precioArticulo ; this.puntos = this.precioArticulo*DepaLineaBl[1]; break;
        case 5: this.saldo = 0; this.puntos = 0; break;
    }
    
    this.eMoney = this.saldo.toFixed(2);
    this.puntosTotal = this.puntos; 
  }

  limpiar() {
    this.precioArticulo = 0;
    this.eMoney = "0";
    this.puntosTotal = 0;
    this.saldo = 0;
    this.puntos = 0;
  }
}
