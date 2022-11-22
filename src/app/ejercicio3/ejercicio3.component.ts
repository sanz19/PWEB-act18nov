import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  
  tipoEmpleado: string = "0";
  diasLaborales: number = 0;
  sueldoBase: number = 0;
  sueldo = 0;
  bono = false;

  constructor() { }
  
  ngOnInit(): void {
  }

	onSelected(value:string): void {
		this.tipoEmpleado = value;
	}

  calcularSueldo() {
    const empleadoBase = [200, 1500];
    const empleadoConf = [250, 1300];
    const empleadoHono = [400, 500];
    const empleadoEven = [430, 0];

    // Validaciones
    if( this.diasLaborales > 28) {
        alert("No se pueden trabajar más de 28 días en un mes.");
        return;
    } else if (this.diasLaborales > 24) {
        this.bono = true;
    }

    switch(parseInt(this.tipoEmpleado)) {
      case 0: alert("Seleccione tipo de empleado."); break;
      case 1: (this.bono == true) ? this.sueldo = (empleadoBase[0]*this.diasLaborales + empleadoBase[1]) : this.sueldo = (empleadoBase[0]*this.diasLaborales); break;
      case 2: (this.bono == true) ? this.sueldo = (empleadoConf[0]*this.diasLaborales + empleadoConf[1]) : this.sueldo = (empleadoConf[0]*this.diasLaborales); break;
      case 3: (this.bono == true) ? this.sueldo = (empleadoHono[0]*this.diasLaborales + empleadoHono[1]) : this.sueldo = (empleadoHono[0]*this.diasLaborales); break;
      case 4: (this.bono == true) ? this.sueldo = (empleadoEven[0]*this.diasLaborales + empleadoEven[1]) : this.sueldo = (empleadoEven[0]*this.diasLaborales); break;
    }
    
    this.sueldoBase = this.sueldo;
  }

  limpiar() {
    this.diasLaborales = 0;
    this.sueldoBase = 0;
  }
}
