import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MedService } from '../med.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addl-medicine',
  templateUrl: './addl-medicine.component.html',
  styleUrls: ['./addl-medicine.component.css']
})
export class AddlMedicineComponent implements OnInit {

  addMedicineForm: FormGroup;

  currentDate = new Date();

  submitted = false;

  constructor(private _medService: MedService) { }

  ngOnInit(): void {
    this.addMedicineForm = new FormGroup({
      Name: new FormControl('', Validators.required),
      Brand: new FormControl('', Validators.required),
      Price: new FormControl(0.00, Validators.required),
      Quantity: new FormControl(1, Validators.required),
      ExpiryDate: new FormControl('', Validators.required),
      Notes: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    console.log(this.addMedicineForm.controls.Name.invalid);
    
    this.submitted = true;
    if (this.addMedicineForm.invalid) {
      return
    }
    const medicineDetails = this.addMedicineForm.value;
    this._medService.addMedicine(medicineDetails).subscribe((res: any) => {
      if (res.status.code === 200) {
        Swal.fire("Success!", "The medicine has been added successfully", "success");
      } else {
        Swal.fire("Oops!", "There is some error while adding the medicine", "error");
      }
    })
    
  }

}
