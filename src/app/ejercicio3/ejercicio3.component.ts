import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  templateUrl: './ejercicio3.component.html',
  styleUrls: ['./ejercicio3.component.css']
})
export class Ejercicio3Component implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }
  
  calcularSueldo() {
    const empleadoBase = [200, 1500];
    const empleadoConf = [250, 1300];
    const empleadoHono = [400, 500];
    const empleadoEven = [430, 0];
    /*
    let tipoEmpleado = document.getElementById("tipoEmpleado").value;
    let dias = document.getElementById("diasLaborales").value;
    let sueldoBase = 0;
    let bono = false;

    // Validaciones
    if( dias > 28) {
        alert("No se pueden trabajar más de 28 días en un mes.");
        return;
    } else if (dias > 24) {
        bono = true;
    }

    switch(parseInt(tipoEmpleado)) {
        case 0: alert("Seleccione tipo de empleado."); break;
        case 1: (bono == true) ? sueldoBase = (empleadoBase[0]*dias + empleadoBase[1]) : sueldoBase = (empleadoBase[0]*dias); break;
        case 2: (bono == true) ? sueldoBase = (empleadoConf[0]*dias + empleadoConf[1]) : sueldoBase = (empleadoConf[0]*dias); break;
        case 3: (bono == true) ? sueldoBase = (empleadoHono[0]*dias + empleadoHono[1]) : sueldoBase = (empleadoHono[0]*dias); break;
        case 4: (bono == true) ? sueldoBase = (empleadoEven[0]*dias + empleadoEven[1]) : sueldoBase = (empleadoEven[0]*dias); break;
    }
    
    document.getElementById("sueldoBase").value = sueldoBase;
    */
}
}
