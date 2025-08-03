import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { MessageService } from 'primeng/api';
import emailjs from 'emailjs-com';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-resume',
  imports: [ButtonModule, DialogModule, ReactiveFormsModule,InputTextModule,InputNumberModule,ToastModule],
  templateUrl: './resume.html',
  styleUrl: './resume.css',
   providers: [MessageService]
})
export class Resume {

  constructor(private fb: FormBuilder,private messageService: MessageService) { }

  isVisibleHireMe: boolean = false;
  hireForm!: FormGroup;

  ngOnInit() {
    this.hireForm = this.fb.group({
      username: ['', Validators.required,Validators.pattern(/^[a-zA-Z\s]{2,50}$/)],
      number: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email,Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
    });
  }

  openHireModal() {
    this.isVisibleHireMe = true;
  }

  submitHireForm() {
    if (this.hireForm.invalid) {
      this.hireForm.markAllAsTouched();
      return;
    }

    console.log('Form Data:', this.hireForm.value);

    // Optionally send data using EmailJS, API, etc.

    this.isVisibleHireMe = false;
    this.hireForm.reset();
  }

  closeHireModal() {
    this.isVisibleHireMe = false;
    this.hireForm.reset();

  }

}
