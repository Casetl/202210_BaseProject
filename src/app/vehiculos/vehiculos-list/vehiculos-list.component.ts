import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {

  vehiculos: Array<Vehiculo> = [];


  constructor(private vehiculoService: VehiculosService) { }

  getVehiculos(): void {
    this.vehiculoService.getVehiculos().subscribe((vehiculos) => {
      this.vehiculos = vehiculos;
    });
  }


  contarVehiculos(vehiculos:Array<Vehiculo>): any {


    let Renault = [];
    let Chevrolet = [];
    let Nissan = [];




    for (let i = 0; i<vehiculos.length; i++) {
      var currentNumber = vehiculos[i];
      if (currentNumber.marca === 'Renault') {
        Renault.push(currentNumber)
      }
      else if(currentNumber.marca === 'Chevrolet') {
        Chevrolet.push(currentNumber)
      }
      else if(currentNumber.marca === 'Nissan') {
        Nissan.push(currentNumber)
      }
    }


    return `Total Renault:  ${Renault.length}  Total Chevrolet: ${Chevrolet.length}  Total Nissan:  ${Nissan.length}`;




  }




  ngOnInit() {

    this.getVehiculos();


  }

}
