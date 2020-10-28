import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HomeService } from '../../services/home.service';
declare var google: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  benefitsList = [];
  facilitiesList = [];
  gallaryList = [];
  contactUsForm: FormGroup;
  submitted = false;
  map;
  @ViewChild('gmap') gmapElement: any;
  bookNowBtn = {
    label: 'Book Now',
    class: 'primary'
  }

  sendBtn = {
    label: 'Send',
    class: 'primary'
  }
  constructor(private formBuilder: FormBuilder,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.getHomePageData();
    this.initContactForm();

    this.homeService.headerMenuClick.subscribe(response => {
      this.scroll(response);
    })
  }

  initMap() {
    const mapProperties = {
      center: new google.maps.LatLng(18.5204, 73.8567),
      zoom: 5,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
    };

    this.map = new google.maps.Map(this.gmapElement.nativeElement, mapProperties);
  }

  scroll(e) {
    setTimeout(() => {
      const el = document.getElementById(e);
      el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }

  ngAfterViewInit() {
    console.log("afterinit");
    setTimeout(() => {
      this.initMap();
    }, 1000);
  }

  getHomePageData() {
    this.benefitsList = [
      { img: '/assets/benefits/like-minded-startup.svg', head: 'Like Minded Startups', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
      { img: '/assets/benefits/large-terrace.svg', head: 'Large Terrace', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
      { img: '/assets/benefits/ready-to-move-in.svg', head: 'Ready to Move in', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
      { img: '/assets/benefits/free-unlimited-wi-Fi.svg', head: 'Free Unlimited Wi-Fi', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
      { img: '/assets/benefits/located-on-main-road.svg', head: 'Located on Main Road', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
      { img: '/assets/benefits/hit-the-target.svg', head: 'Hit the Target', para: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc porta fringilla ullamcorper. Morbi felis orci, lacinia a velit et, sodales...' },
    ]

    this.facilitiesList = [
      { img: '/assets/facilities/facility1.svg', label: '24/7 Access' },
      { img: '/assets/facilities/facility2.svg', label: 'Spacious Cubicles' },
      { img: '/assets/facilities/facility3.svg', label: '24/7 Power Backup' },
      { img: '/assets/facilities/facility4.svg', label: 'Printer Facilities' },
      { img: '/assets/facilities/facility5.svg', label: 'CCTV & Access Cards' },
      { img: '/assets/facilities/facility6.svg', label: 'Fridge & Microwave' },
      { img: '/assets/facilities/facility7.svg', label: 'TV & Set Top Box' },
      { img: '/assets/facilities/facility8.svg', label: 'Reception Area' },
      { img: '/assets/facilities/facility9.svg', label: 'Large Cafeteria' },
      { img: '/assets/facilities/facility10.svg', label: 'TV Conference Rooms' },
      { img: '/assets/facilities/facility11.svg', label: 'Various Meeting Rooms' },
      { img: '/assets/facilities/facility12.svg', label: 'Postal Address' },
      { img: '/assets/facilities/facility13.svg', label: 'Large Open Terrace' },
      { img: '/assets/facilities/facility14.svg', label: 'Housekeeping Facilities' },
      { img: '/assets/facilities/facility15.svg', label: 'Parking Spaces' },
    ];

    this.gallaryList = [
      { img: 'assets/gallary/gallary1.png' },
      { img: 'assets/gallary/gallary2.png' },
      { img: 'assets/gallary/gallary3.png' },
      { img: 'assets/gallary/gallary4.png' },
      { img: 'assets/gallary/gallary5.png' },
      { img: 'assets/gallary/gallary6.png' },
    ]
  }


  initContactForm() {
    this.contactUsForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/)]],
      phone: ['', [Validators.maxLength(13), Validators.minLength(11)]],
      message: [''],
    });
  }

  onSend() {
    debugger
    console.log('test')
    this.submitted = true;
    if (this.contactUsForm.invalid) {
      return false;
    } else {
      console.log(this.contactUsForm.controls)
    }
  }
}
