import { ActivatedRoute, Router} from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
declare var $: any;

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper';
import { Profil } from '../models/profil';
import { ProfilService } from '../services/profil.service';
import { first } from 'rxjs';
import { FormGroup, FormBuilder, FormsModule, NgForm } from '@angular/forms';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]);

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProfilComponent implements OnInit {

  profil: any={}

  // Champ de formulaire
  nom_complet?: string;
  telephone?:string;
  // updateProfil!: FormGroup;

  constructor (
    private router: Router, 
    // public fb: FormBuilder,
    private profils: ProfilService,
    private localStorageService: TokenStorageService,
    ) {
      // this.updateProfil =  this.fb.group({
      //   nom_complet:null,
      //   telephone:null,
      //   bio:null,
      //   avatar:null,
      //   password:null,
      //   the_user_id:this.localStorageService.getUser()
      // });
    }

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

      // INTERACTIONS DES ITEMS DU MENU PROFIL
      $(".item-1").click(function() {
        $(".item-1").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-3").css("font-size", "");
        $(".container-view-row-mes-cours").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-2").click(function() {
        $(".item-2").css("font-size", "1.5rem");
        $(".item-3").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-forums").fadeIn(200);
        $(".container-view-row-mes-cours").css("display", "none");
        $(".container-view-row-parametres").css("display", "none");
      });
      $(".item-3").click(function() {
        $(".item-3").css("font-size", "1.5rem");
        $(".item-2").css("font-size", "");
        $(".item-1").css("font-size", "");
        $(".container-view-row-parametres").fadeIn(200);
        $(".container-view-row-forums").css("display", "none");
        $(".container-view-row-mes-cours").css("display", "none");
      });
    })


    this.GetProfilInfol(this.localStorageService.getUser())
  }

  signout() {
    this.localStorageService.signOut()
    this.router.navigateByUrl('/authentification')
  }

  GetProfilInfol(userId:any) {
    // console.log(userId);
    this.profils.getUserProfilInfo(userId)
      .pipe(first())
        .subscribe((response:any) => {
            this.profil = response.userInfos
            // console.log(this.profil);
          
            // this.profil = 
            // {
            //   "title": response.title,
            //   "content": response.content,
            //   "concerning": response.concerning,
            //   "created_at":response.created_at
            // } 
            // this.profil = response 
        })  
        
  }

  UpdateUserProfil(form: NgForm) {
    let userUpdateInfo = {
      "nom_complet":"",
      "telephone":this.telephone,
      "the_user_id":this.localStorageService.getUser()
    }
    userUpdateInfo.nom_complet = this.nom_complet,
    console.log(userUpdateInfo);

    this.profils.updateUserProfilInfo(userUpdateInfo)
      .pipe(first())
      .subscribe(
        (response) =>{
          if (response.code == 200 ) {
            form.reset()
            this.GetProfilInfol(this.localStorageService.getUser())
          } else {
            console.log("erreur");
            
          }
      })
 
  }


}
