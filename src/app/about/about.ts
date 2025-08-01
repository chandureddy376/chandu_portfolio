import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-about',
  imports: [ButtonModule],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {

  downloadResume() {
  const link = document.createElement('a');
  link.href = 'assets/Chandu_BC_Resume_updated2.pdf';
  link.download = 'Chandu_Resume.pdf';
  link.click();
}

}
