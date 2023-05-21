import { Router } from '@angular/router';
import { Component, OnInit, ViewEncapsulation  } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.scss']
})
export class AuthentificationComponent implements OnInit {

  constructor (private router: Router) {}
  ngOnInit(): void {
    //CODE
    $(".btn-creation").click(function() {
      $(".connexion-bloc").css("display","none");
      $(".inscription-bloc").fadeIn(200);
    });
    $(".btn-connexion").click(function() {
      $(".inscription-bloc").css("display","none");
      $(".connexion-bloc").fadeIn(200);
    });
  }
}
