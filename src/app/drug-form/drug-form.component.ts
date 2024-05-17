import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DrugsService } from '../drugs.service';

@Component({
  selector: 'app-drug-form',
  templateUrl: './drug-form.component.html',
  styleUrl: './drug-form.component.css'
})
export class DrugFormComponent implements OnInit {
  name = "mike";
  form : FormGroup;
  disabled = true

  constructor(private drugsService: DrugsService){}

  ngOnInit() {
    this.form = new FormGroup({
      moa: new FormControl('', Validators.required),
      generic_name: new FormControl('', [Validators.required, Validators.email]),
      brand_name: new FormControl('', Validators.required)
    });
  }
  onSubmit(){
    var form_values = this.form.value;


    this.drugsService.getDrugs().subscribe((data: any) => {
      console.log(data)
    })
    

  }
}
