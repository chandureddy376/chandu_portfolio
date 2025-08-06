import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { DialogModule } from 'primeng/dialog';
import { TagModule } from 'primeng/tag';

@Component({
  selector: 'app-project',
  imports: [CarouselModule, DialogModule, TagModule],
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

  sitecrm = [
    { name: 'Product 0', image: 'assets/login.png' },
    { name: 'Product 1', image: 'assets/Dashboard.png' },
    { name: 'Product 2', image: 'assets/fresh_leads.png' },
    { name: 'Product 3', image: 'assets/visit_dashboard.png' },
    { name: 'Product 4', image: 'assets/property_price_list.png' },
    { name: 'Product 5', image: 'assets/details_page.png' },
    { name: 'Product 6', image: 'assets/deatils_whatsapp.png' },
    { name: 'Product 7', image: 'assets/visit_panel.png' },
    { name: 'Product 8', image: 'assets/inventory.png' },
    { name: 'Product 9', image: 'assets/block_inventory.png' },
    { name: 'Product 10', image: 'assets/edit_inventory.png' },
    { name: 'Product 11', image: 'assets/call_insights.png' },
    { name: 'Product 12', image: 'assets/call_report.png' },
    { name: 'Product 13', image: 'assets/monthly_report.png' }
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
  position: 'left' | 'right' | 'top' | 'bottom' | 'center' | 'topleft' | 'topright' | 'bottomleft' | 'bottomright' = 'center';

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.Kanilebettu.length;
    }, 3000);

    this.intervalId = setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.sitecrm.length;
    }, 3000);
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
