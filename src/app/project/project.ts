import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-project',
  imports: [CarouselModule, DialogModule],
  templateUrl: './project.html',
  styleUrl: './project.css'
})
export class Project {

  products = [
    { name: 'Product 1', image: 'assets/cal.png' },
    { name: 'Product 2', image: 'assets/2nd_image.png' },
    { name: 'Product 3', image: 'assets/about_page_img.png' },
    { name: 'Product 4', image: 'assets/fb.png' },
  ];

  responsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  activeIndex: number = 0;
  intervalId: any;
  isVisible1Modal: boolean = false;
  isVisible2Modal: boolean = false;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.products.length;
    }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  open1Modal() {
    this.isVisible1Modal = true;
  }

  open2Modal() {
    this.isVisible2Modal = true;
  }
}
