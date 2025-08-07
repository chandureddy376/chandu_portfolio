import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ReactiveFormsModule } from '@angular/forms';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule, InputGroupModule, InputGroupAddonModule, RouterModule, FormsModule, ToastModule, DialogModule, InputTextModule, InputNumberModule, ReactiveFormsModule,ProgressSpinnerModule,CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  providers: [MessageService]
})
export class Contact {
  constructor(private messageService: MessageService, private fb: FormBuilder) { }

  isVisibleHireMe: boolean = false;
  hireForm!: FormGroup;
  enquiredMail: string = '';
  isLoader:boolean=false;

  @Output() sectionNavigate = new EventEmitter<string>();

  ngOnInit() {
    this.hireForm = this.fb.group({
      username: ['', Validators.required, Validators.pattern(/^[a-zA-Z\s]{2,50}$/)],
      number: [null, [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]]
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

  navigateTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  sendEmail() {
    if (!this.isValidEmail(this.enquiredMail)) {
      this.messageService.add({ severity: 'error', summary: 'Email', detail: 'Please a Valid E-Mail id', key: 'br' });
      return;
    }

    this.isLoader = true;

    const templateParams = {
      user_email: this.enquiredMail,
      name: this.enquiredMail,
      title: 'Protfolio Enquiry'
    };
    emailjs.send(
      'service_rk32sy8',
      'template_4waj1af',
      templateParams,
      'zofwWtiXDqaNQCCdM'
    ).then(() => {
       this.isLoader = false;
      this.messageService.add({ severity: 'success', summary: 'Email Received', detail: 'Thanks! Your Mail was received successfully.', key: 'br'});
      this.enquiredMail = '';
    }).catch((error) => {
      this.messageService.add({ severity: 'error', summary: 'Email error', detail: 'Sending failed. Try again.', key: 'br' });
    });
  }

  isValidEmail(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

}
