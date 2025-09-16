import { JsonPipe, NgClass, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-example',
  imports: [
    ReactiveFormsModule,
    JsonPipe,
    NgClass,
    NgIf
  ],
  templateUrl: './form-example.html',
  styleUrl: './form-example.css'
})
export class FormExample {
  form !: FormGroup;
  private formBuilder = inject(FormBuilder);
  constructor(){
    this.buildForm();
  }

  private buildForm(){
    const nameRgx = /^(([a-zA-ZÀ-ÖØ-öø-ÿ]{3,60})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]*))$/;
    const mailRgx = /\w+@\w+\.+[a-z]/;
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern(nameRgx)]],
      mail: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.minLength(10),
          Validators.maxLength(50),
          Validators.pattern(mailRgx)
        ]
      ]
    });
  }
  // Clean Code
  get mailField(){
    return this.form.get('mail');
  }

  get nameField(){
    return this.form.get('name');
  }

  // Metodo para recirbir la información
  public keep(e:Event):void{
    e.preventDefault;
    console.log(e.target);
    if(this.form.valid){
      const data = this.form.value;
      console.log(data);
    }
  }
}
