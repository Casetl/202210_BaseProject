/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { VehiculosListComponent } from './vehiculos-list.component';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { HttpClientModule } from '@angular/common/http';

describe('VehiculosListComponent', () => {
  let component: VehiculosListComponent;
  let fixture: ComponentFixture<VehiculosListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosListComponent ],
      providers: [VehiculosService],
      imports: [HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiculosListComponent);
    component = fixture.componentInstance;



    component.vehiculos = [

    new Vehiculo(

      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.lorem.sentence(),
      faker.datatype.number(),
      faker.lorem.sentence(),
      faker.image.imageUrl(),
      ),


    new Vehiculo(

        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.datatype.number(),
        faker.lorem.sentence(),
        faker.image.imageUrl(),
        ),

    new Vehiculo(

          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.lorem.sentence(),
          faker.datatype.number(),
          faker.lorem.sentence(),
          faker.image.imageUrl(),
          )
    ];

    fixture.detectChanges();
    debug = fixture.debugElement;
  });


      it('should create', () => {
      expect(component).toBeTruthy();
      });

      it('la tabla deberia tener tres filas mas el encabezado', () => {
      const filas = debug.queryAll(By.css('tbody tr'));
      const encabezado =  debug.queryAll(By.css('thead tr'))
      expect(filas.length + encabezado.length).toBe(4)
      });


});
