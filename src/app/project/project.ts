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

  Kanilebettu = [
    { name: 'Product 1', image: 'assets/saleorder-list.png' },
    { name: 'Product 2', image: 'assets/frieght.png' },
    { name: 'Product 3', image: 'assets/lot.png' },
    { name: 'Product 4', image: 'assets/bid.png' },
    { name: 'Product 5', image: 'assets/bid-list.png' },
    { name: 'Product 6', image: 'assets/salesbill-list.png' },
    { name: 'Product 7', image: 'assets/salebill.png' },
    { name: 'Product 8', image: 'assets/invoice.png' },
    { name: 'Product 9', image: 'assets/report-list.png' },
    { name: 'Product 10', image: 'assets/report_creation.png' },
  ];

  //   products = [
  //   { name: 'Product 1', image: 'assets/Screenshot 2025-08-05 221546' },
  //   { name: 'Product 2', image: 'assets/Screenshot 2025-08-05 223051' },
  //   { name: 'Product 3', image: 'assets/Screenshot 2025-08-05 223154' },
  //   { name: 'Product 4', image: 'assets/Screenshot 2025-08-05 223310' },
  //   { name: 'Product 5', image: 'assets/Screenshot 2025-08-05 223432' },
  //   { name: 'Product 6', image: 'assets/Screenshot 2025-08-05 223432' },
  //   { name: 'Product 7', image: 'assets/Screenshot 2025-08-05 223540' },
  //   { name: 'Product 8', image: 'assets/Screenshot 2025-08-05 223919' },
  //   { name: 'Product 9', image: 'assets/Screenshot 2025-08-05 224024' },
  //   { name: 'Product 10', image: 'assets/Screenshot 2025-08-05 224308' },
  // ];

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
  position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.Kanilebettu.length;
    }, 3000);

    // this.intervalId = setInterval(() => {
    //   this.activeIndex = (this.activeIndex + 1) % this.products.length;
    // }, 3000);
  }

  ngOnDestroy(): void {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  open1Modal() {
    this.isVisible1Modal = true;
    this.position = 'bottom';
  }

  open2Modal() {
    this.isVisible2Modal = true;
    this.position = 'bottom';
  }
}
