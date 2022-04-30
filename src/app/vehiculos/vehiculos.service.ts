import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {

private apiUrl: string = environment.baseUrl;



constructor(private http: HttpClient) { }


getVehiculos(): Observable<Vehiculo[]> {
  return this.http.get<Vehiculo[]>(this.apiUrl);
}


}
