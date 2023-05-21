import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class LandingComponent implements OnInit {
  constructor (private router: Router) {}

  ngOnInit(): void {

  }
}
