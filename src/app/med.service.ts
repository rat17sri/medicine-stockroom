import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MedService {

  constructor(private http: HttpClient) { }

  getAllMedicine() {
    return this.http.get('https://localhost:44356/api/Medicine/GetAllMedicines'); 
  }

  addMedicine(medicineDetails) {
    return this.http.post('https://localhost:44356/api/Medicine/AddMedicine', medicineDetails);
  }

}
