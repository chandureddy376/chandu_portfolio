import { Component, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule,
    ButtonModule
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  encapsulation: ViewEncapsulation.Emulated
})
export class Home {

  downloadResume() {
    const link = document.createElement('a');
    link.href = 'assets/Chandu_BC_Resume_updated2.pdf';
    link.download = 'Chandu_Resume.pdf';
    link.click();
  }

}
