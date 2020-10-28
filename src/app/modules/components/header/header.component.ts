import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  bannerBtn = {
    label: 'Get Started',
    class: 'primary'
  }
  displaySidebar = false;
  constructor(private homeService: HomeService) { }

  ngOnInit(): void {
  }

  onGetStarted() {

  }
  onSidebar() {
    this.displaySidebar = true;
  }

  onMenuClick(e) {
    switch (e) {
      case 'Home':
      this.homeService.onHeaderMenuClick('Home');
        break;
      case 'Benefits':
        this.homeService.onHeaderMenuClick('Benefits');
        break;
      case 'Facilities':
        this.homeService.onHeaderMenuClick('Facilities');
        break;
      case 'Gallery':
        this.homeService.onHeaderMenuClick('Gallery');
        break;
      case 'Pricing':
        this.homeService.onHeaderMenuClick('Pricing');
        break;
      case 'Contact':
        this.homeService.onHeaderMenuClick('Contact');
        break;
      default:
        this.homeService.onHeaderMenuClick('Home');
        break;
    }
  }
}
