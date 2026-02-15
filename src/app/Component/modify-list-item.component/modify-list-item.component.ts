import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-modify-list-item.component',
  imports: [],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css',
})
export class ModifyListItemComponent {
  modifyForm? : FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.modifyForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      password: ['', Validators.required],

    })
  }

}

