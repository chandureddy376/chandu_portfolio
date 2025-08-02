import { Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import emailjs from 'emailjs-com';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-contact',
  imports: [ButtonModule, InputGroupModule, InputGroupAddonModule, RouterModule,FormsModule,ToastModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  providers: [MessageService]
})
export class Contact {
   constructor(private messageService: MessageService) {}


  enquiredMail:string = '';

  @Output() sectionNavigate = new EventEmitter<string>();

  navigateTo(sectionId: string) {
    const el = document.getElementById(sectionId);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  sendEmail() {
    console.log(this.enquiredMail)
  if (!this.isValidEmail(this.enquiredMail)) {
     this.messageService.add({ severity: 'error', summary: 'Email', detail: 'Please a Valid E-Mail id' });
    return;
  }

    const templateParams = {
      user_email: this.enquiredMail,
      name:this.enquiredMail,
      title:'Protfolio Enquiry'
    };
    console.log(templateParams)
    emailjs .send(
        'service_rk32sy8',
        'template_4waj1af',
        templateParams,
        'zofwWtiXDqaNQCCdM'
      ) .then(() => {
          this.messageService.add({ severity: 'success', summary: 'Email Received', detail: 'Thanks! Your Mail was received successfully.' });
          this.enquiredMail = '';
      }) .catch((error) => {
         this.messageService.add({ severity: 'error', summary: 'Email error', detail: 'Sending failed. Try again.' });
      });
  }

  isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return emailRegex.test(email);
} 

}
