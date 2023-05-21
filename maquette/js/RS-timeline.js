$(document).ready(function() {

    document.getElementById('recherche-membres-scrollable');
    const height = $('.block-recherche-membres').height();
    $('#recherche-membres-scrollable').css('height', height);

    document.getElementById('recherche-communaute-scrollable');
    const heights = $('.block-recherche-communautes').height();
    $('#recherche-communaute-scrollable').css('height', heights);

    document.getElementById('deconnexion-dropdown');
    const margRight = $('.form-inline').position();
    $('#deconnexion-dropdown').css('position', margRight);



    //CODE DE LA PAGE DE ACTUALITE
    $(".notification-parent").click(function() {
        $(".notification-enfant").fadeToggle(1000);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
    });

    $(".shopping-parent").click(function() {
        $(".shopping-enfant").fadeToggle(1000);
    });

    $(".service-parent").click(function() {
        $(".service-enfant").fadeToggle(1000);
    });

    $(".coment").click(function() {
        $(".couverture-du-commentaire").fadeIn(1000);
        $(".boite-de-commentaires").fadeIn(1000);
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(1000);
        $(".boite-de-commentaires").css("display", "none");
    });






    //CODE DE LA CHAT BOX
    $(".un-container-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
        $(".couverture-du-commentaire").fadeIn(1000);
    });
    $(".button-fermer").click(function() {
        $(".grand-block-du-chat").fadeOut(1000);
    });




    //CODE DU CLICK SUR LES ICONS DE MESSAGES / RELATIONS / RECOMMANDATIONS
    $(".nav-item-notifications-messages").click(function() {
        $(".notifications-message-dropdown").fadeToggle(300);
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-relations").click(function() {
        $(".notifications-relation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-recommandation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });

    $(".nav-item-notifications-recommandations").click(function() {
        $(".notifications-recommandation-dropdown").fadeToggle(300);
        $(".notifications-message-dropdown").css("display", "none");
        $(".notifications-relation-dropdown").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");
    });


    //CODE DE LA BARRE DE RECHERCHE DES AMIS ET COMMUNAUTES
    $(".search-box").click(function() {
        $(".searchbar-dropdown").css("display", "block");
        $(".couverture-du-commentaire").css("background", "transparent");
        $(".couverture-du-commentaire").css("display", "block");
    });

    $(".search-box").mouseleave(function() {
        $(".searchbar-dropdown").css("margin-left", "-1.5%");
    });

    $(".search-box").mouseover(function() {
        $(".searchbar-dropdown").css("margin-left", "");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".searchbar-dropdown").css("display", "none");
        $(".couverture-du-commentaire").css("background", "");
        $(".couverture-du-commentaire").css("display", "none");
        $(".grand-block-du-chat").css("display", "none");
    });


    // NOUVEAU CODE AJOUTE
    //CODE DE LA DROPDOWN DE DECONNEXION
    $(".logout-bouton").click(function() {
        $(".couverture-du-commentaire").css({
            'display': 'block',
            'background': 'rgba(39, 55, 70, .7)'
        });
        $(".dropdown-deconnexion").slideDown(500);
        $(".dropdownOfMenu").css("display", "none");
    });
    //CODE DE FERMETTURE DE LA DROPDOWN DE DECONNEXION
    $(".closedropsownDeconnexion").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    });
    $(".couverture-du-commentaire").click(function() {
        $(".dropdown-deconnexion").slideUp(500);
        $(".couverture-du-commentaire").css('background', '');
        $(".couverture-du-commentaire").fadeOut(1000);
    }); // NOUVEAU CODE AJOUTE FIN



    //BARRE DE PUBLICATION
    /*$(".input-publication-click").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".block-box-publication").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".block-box-publication").css("display", "none");
    });*/



    // NOUVEAU CODE AJOUTE 
    //CODE DE LA POPUP DU MENU DE LA PUBLICATION
    $(".menu-publication-icon").click(function() {
        $(".block-menu-publication").toggle();
    });



    //CODE DE LA POPUP SUPPRIMER LA PUBLICATION
    $(".supprimer-pub").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-supprimer-publication").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SUPPRIMER LA PUBLICATION
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
    });




    //CODE DE LA POPUP SIGNALER LE USER
    $(".signaler-user").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-signaler-user").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP SIGNALER LA PUBLICATION
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
    });





    //CODE DE LA POPUP DESABONNEMENT D'UN USER
    $(".desabonner-user").click(function() {
        $(".block-menu-publication").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-desabonnement").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DESABONNEMENT D'UN USER
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
    });









    //DYNAMISATION DES ICONS DE RECATIONS SUR UNE PUBLICATION (NOUVEAU CODE)

    /* ICONE COMMENTAIRE */
    $(".coment").mouseover(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("width", "200px");
        $(".partager").css("margin-top", "-2px");
        $(".partager").css("margin-left", "7px");
        $(".soutenir").css("margin-top", "-2px");
        $(".soutenir").css("margin-left", "7px");
        $(".triste").css("margin-top", "-2px");
        $(".triste").css("margin-left", "7px");
        $(".coment").css("height", "35px");
        $(".coment").css("margin", "0px");
        $(".coment").css("margin-top", "-5px");
    });
    $(".coment").mouseout(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("height", "35px");
        $(".bloc-reaction").css("width", "200px");
        $(".partager").css("margin-top", "");
        $(".partager").css("margin-left", "");
        $(".soutenir").css("margin-top", "");
        $(".soutenir").css("margin-left", "");
        $(".triste").css("margin-top", "");
        $(".triste").css("margin-left", "");
        $(".coment").css("height", "25px");
        $(".coment").css("margin", "");
        $(".coment").css("margin-top", "");
    });

    /* ICONE PARTAGER */
    $(".partager").mouseover(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "-2px");
        $(".coment").css("margin-left", "7px");
        $(".soutenir").css("margin-top", "-2px");
        $(".soutenir").css("margin-left", "7px");
        $(".triste").css("margin-top", "-2px");
        $(".triste").css("margin-left", "7px");
        $(".partager").css("height", "35px");
        $(".partager").css("margin", "0px");
        $(".partager").css("margin-top", "-5px");
    });
    $(".partager").mouseout(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("height", "35px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "");
        $(".coment").css("margin-left", "");
        $(".soutenir").css("margin-top", "");
        $(".soutenir").css("margin-left", "");
        $(".triste").css("margin-top", "");
        $(".triste").css("margin-left", "");
        $(".partager").css("height", "25px");
        $(".partager").css("margin", "");
        $(".partager").css("margin-top", "");
    });

    /* ICONE SOUTENIR */
    $(".soutenir").mouseover(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "-2px");
        $(".coment").css("margin-left", "7px");
        $(".partager").css("margin-top", "-2px");
        $(".partager").css("margin-left", "7px");
        $(".triste").css("margin-top", "-2px");
        $(".triste").css("margin-left", "7px");
        $(".soutenir").css("height", "35px");
        $(".soutenir").css("margin", "0px");
        $(".soutenir").css("margin-top", "-5px");
    });
    $(".soutenir").mouseout(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("height", "35px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "");
        $(".coment").css("margin-left", "");
        $(".partager").css("margin-top", "");
        $(".partager").css("margin-left", "");
        $(".triste").css("margin-top", "");
        $(".triste").css("margin-left", "");
        $(".soutenir").css("height", "25px");
        $(".soutenir").css("margin", "");
        $(".soutenir").css("margin-top", "");
    });

    /* ICONE TRISTE */
    $(".triste").mouseover(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "-2px");
        $(".coment").css("margin-left", "7px");
        $(".partager").css("margin-top", "-2px");
        $(".partager").css("margin-left", "7px");
        $(".soutenir").css("margin-top", "-2px");
        $(".soutenir").css("margin-left", "7px");
        $(".triste").css("height", "38px");
        $(".triste").css("margin", "0px");
        $(".triste").css("margin-top", "-5px");
    });
    $(".triste").mouseout(function() {
        $(".container-des-reactions").css("height", "45px");
        $(".container-des-reactions").css("left", "50%");
        $(".container-des-reactions").css("top", "20px");
        $(".bloc-reaction").css("height", "35px");
        $(".bloc-reaction").css("width", "200px");
        $(".coment").css("margin-top", "");
        $(".coment").css("margin-left", "");
        $(".partager").css("margin-top", "");
        $(".partager").css("margin-left", "");
        $(".soutenir").css("margin-top", "");
        $(".soutenir").css("margin-left", "");
        $(".triste").css("height", "28px");
        $(".triste").css("margin", "");
        $(".triste").css("margin-top", "");
    });










    //CODE DE LA POPUP QUITTER UNE COMMUNAUTE
    $(".btn-quitter").click(function() {
        $(".container-full-list-des-communautes").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-quitter-communaute").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP QUITTER UNE COMMUNAUTE
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-quitter-communaute").css("display", "none");
    });






    //CODE DE FERMETTURE DE TOUTE LES POPUP EN CLIQUANT SUR LE BOUTON "NON"
    $(".btn-non").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
        $(".popup-signaler-publication").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        $(".popup-quitter-communaute").css("display", "none");

    }); // NOUVEAU CODE AJOUTE FIN


    //POPUP DE CREATION DE COMMUNAUTE
    $(".creer-communaute").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-creation-de-groupe").css("display", "block");
    });

    $(".creer-communaute-mobile").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-creation-de-groupe").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });

    $(".close-suggestion-amis").click(function() {
        $(".block-affichage-amis-a-ajouter").css("display", "none");
    });

    $(".search-add-friend").click(function() {
        $(".block-affichage-amis-a-ajouter").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".popup-creation-de-groupe").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });






    //CODE DE LA POPUP DE LA LISTE DE TOUS LES GROUPES D'UN USER
    $(".voirPlus").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeIn(200);
        $(".container-full-list-des-communautes").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".dropdownOfMenu").css("display", "none");
        $(".couverture-du-commentaire").fadeOut(100);
        $(".container-full-list-des-communautes").css("display", "none");
    });






    //CODE DE LA PAGE DE ACTUALITE : LES COMMUNAUTES
    $(".communauteOne").mouseover(function() {
        $(".cover-communauteOne").show();
    });
    $(".communauteOne").mouseleave(function() {
        $(".cover-communauteOne").hide();
    });


    $(".communauteSecond").mouseover(function() {
        $(".cover-communauteTwo").show();
    });
    $(".communauteSecond").mouseleave(function() {
        $(".cover-communauteTwo").hide();
    });


    $(".communauteThree").mouseover(function() {
        $(".cover-communauteThree").show();
    });
    $(".communauteThree").mouseleave(function() {
        $(".cover-communauteThree").hide();
    });



    $(".communauteFour").mouseover(function() {
        $(".cover-communauteFour").show();
    });
    $(".communauteFour").mouseleave(function() {
        $(".cover-communauteFour").hide();
    });



    $(".communauteFive").mouseover(function() {
        $(".cover-communauteFive").show();
    });
    $(".communauteFive").mouseleave(function() {
        $(".cover-communauteFive").hide();
    });


    $(".voirPlus").mouseover(function() {
        $(".cover-communauteVoirPlus").show();
    });
    $(".voirPlus").mouseleave(function() {
        $(".cover-communauteVoirPlus").hide();
    });




    //MENU MOBILE
    $(".mobile-menu").click(function() {
        $(".dropdownOfMenu").toggle(); // NOUVEAU CODE AJOUTE
        $(".popup-creation-de-groupe").css("display", "none");
        $(".container-full-list-des-communautes").css("display", "none");
        $(".couverture-du-commentaire").css("display", "none");
    });

    $(".container-des-notifications-mobile").click(function() {
        $(".dropdownOfNotifications").toggle(500);
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-messages").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-relations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-relation-dropdown-mobile").css("display", "block");
        $(".notifications-message-dropdown-mobile").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "none");

    });

    $(".notifs-recommandations").click(function() {
        $(".dropdownOfNotifications").css("display", "none");
        $(".notifications-recommandation-dropdown-mobile").css("display", "block");
        $(".notifications-relation-dropdown-mobile").css("display", "none");
        $(".notifications-message-dropdown-mobile").css("display", "none");
    });


    // NOUVEAU CODE AJOUTE 
    // FIXATION DES ASIDES
    var waypoint = new Waypoint({
        element: document.getElementById('fixation'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#fixation').removeClass('a-fixer');
                $('#container-des-articles').removeClass('reduire-margin');

            } else {
                $('#fixation').addClass('a-fixer');
                const width = $('#categorie-sympathisant').width();
                $('#fixation').css('width', width);
                $('#container-des-articles').addClass('reduire-margin');
            }
        },
    });
    var waypoint2 = new Waypoint({
        element: document.getElementById('block-community-a-fixer'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#block-community-a-fixer').removeClass('a-fixer-a-droite');

            } else {
                $('#block-community-a-fixer').addClass('a-fixer-a-droite');
                const width = $('#categorie-sympathisant').width();
                $('#block-community-a-fixer').css('width', width);

            }
            console.log('Basic waypoint triggered', this.triggerPoint, direction)
        },
    });

});

//


var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    }
});


var swipers = new Swiper('.swiper-container-deux', {
    slidesPerView: 3,
    spaceBetween: 30,
    freeMode: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    }
}); // NOUVEAU CODE AJOUTE FIN