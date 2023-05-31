import { ActivatedRoute, Router} from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.scss']
})
export class FormationsComponent implements OnInit {
  constructor (
    private router: Router, 
    private localStorageService: TokenStorageService,
    ) {}

  ngOnInit(): void {
    $(document).ready(function () {
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
    })
  }

  signout() {
    this.localStorageService.signOut()
    this.router.navigateByUrl('/authentification')
  }
}
