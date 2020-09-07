import { Component, OnInit } from '@angular/core';
import { MedService } from '../med.service';

@Component({
  selector: 'app-all-medicine',
  templateUrl: './all-medicine.component.html',
  styleUrls: ['./all-medicine.component.css'],
})
export class AllMedicineComponent implements OnInit {
  medicineData = [];
  filteredMedicineData = [];

  currentDate = new Date();

  searchText: string;

  constructor(private medService: MedService) {}

  ngOnInit(): void {
    this.getAllMedicine();
  }

  onSearch(): void {
    if (this.searchText) {
      this.filteredMedicineData = this.medicineData.filter(
        med => med.name.toLowerCase().startsWith(this.searchText.toLowerCase()));
      
    } else {
      this.filteredMedicineData = this.medicineData;
    }
  }

  getAllMedicine() {
    this.medService.getAllMedicine().subscribe((res: any) => {
      if (res.status.code === 200) {
        this.medicineData = res.data;
      } else {
        this.medicineData = null;
      }
      this.filteredMedicineData = this.medicineData;
    });
    console.log(this.medicineData);
  }

  addNumberOfDays() {
    this.medicineData.forEach((med: any) => {
      med['days'] = this.getRemainingDays(med.expiryDate);
    });
  }

  getRemainingDays(expiryDate) {
    // To calculate the time difference of two dates
    const Difference_In_Time = expiryDate.getTime() - this.currentDate.getTime();
    // To calculate the no. of days between two dates
    const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
    return Difference_In_Days;
  }

}
