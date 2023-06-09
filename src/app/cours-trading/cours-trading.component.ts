import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-cours-trading',
  templateUrl: './cours-trading.component.html',
  styleUrls: ['./cours-trading.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CoursTradingComponent implements OnInit {

  constructor (private router: Router) {}

  ngOnInit(): void {
    $(document).ready(function () {
      $(".courses-bloc-row").css("display","none");
      $(".bloc-zero").css("display","flex");
      //CODE
      $(".btn-0").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-zero").fadeIn(200);
      });

      $(".btn-1").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-one").fadeIn(200);
      });

      $(".btn-2").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-two").fadeIn(200);
      });

      $(".btn-3").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-three").fadeIn(200);
      });

      $(".btn-4").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-four").fadeIn(200);
      });

      $(".btn-5").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-five").fadeIn(200);
      });

      $(".btn-6").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-six").fadeIn(200);
      });

      $(".btn-7").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-seven").fadeIn(200);
      });

      $(".btn-8").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-eight").fadeIn(200);
      });

      $(".btn-9").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-nine").fadeIn(200);
      });

      $(".btn-10").click(function() {
        $(".courses-bloc-row").css("display","none");
        $(".bloc-ten").fadeIn(200);
      });

      //INTERACTION DES BOUTON DU COURS
      $(".btn-exercise").click(function() {
        $(".container-popup-exercice").css("display", "flex");
        $(".container-popup-exercice").fadeIn(200);
      });
      $(".close-exercise").click(function() {
        $(".container-popup-exercice").fadeOut(200);
      });

      $(".btn-coaching").click(function() {
        $(".container-popup-coaching").css("display", "flex");
        $(".container-popup-coaching").fadeIn(200);
      });
      $(".close-coaching").click(function() {
        $(".container-popup-coaching").fadeOut(200);
      });

      $(".menuModalIcon").click(function() {
        $(".menu-blc").addClass("animate__fadeInLeft");
        $(".menu-blc").removeClass("animate__fadeOutLeft");
        $(".container-menus").fadeIn(200);
        $(".container-menus").css("display","flex");
      });

      $(".item-close-menu").click(function() {
        $(".menu-blc").removeClass("animate__fadeInLeft");
        $(".menu-blc").addClass("animate__fadeOutLeft");
        $(".container-menus").fadeOut(200);
      });


      $(".form-inline").click(function() {
        $(".session-bloc").addClass("animate__fadeInRight");
        $(".session-bloc").removeClass("animate__fadeOutRight");
        $(".container-session").fadeIn(200);
        $(".container-session").css("display","flex");
      });

      $(".item-close-session").click(function() {
        $(".session-bloc").addClass("animate__fadeOutRight");
        $(".session-bloc").removeClass("animate__fadeInRight");
        $(".container-session").fadeOut(200);
      });

    });
  }

}
