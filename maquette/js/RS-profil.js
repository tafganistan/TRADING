$(document).ready(function() {

    document.getElementById('block-un-commentaire');
    const height = $('.un-article').height();
    $('#block-un-commentaire').css('height', height);


    //BARRE DE PUBLICATION
    $(".input-publication-click").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".block-box-publication").css("display", "block");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".block-box-publication").css("display", "none");
    });

    //CODE GENERAL DES NAVBARS / COMMENTAIRES / CHATBOX
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
        $(".boite-de-commantaires").fadeIn(1000);
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").fadeOut(1000);
        $(".boite-de-commantaires").fadeOut(1000);
    });

    $(".un-container-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
    });

    $(".block-d-un-ami-connecte").click(function() {
        $(".grand-block-du-chat").fadeIn(1000);
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



    //DROPDOWN DE RECHERCHE DES AMIS
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
    });


    // NOUVEAU CODE AJOUTE 
    //CODE DE LA DROPDOWN DE DECONNEXION
    $(".logout-bouton").click(function() {
        $(".couverture-du-commentaire").css({
            'display': 'block',
            'background': 'rgba(39, 55, 70, .7)'
        });
        $(".dropdown-deconnexion").slideDown(500);
        $(".dropdownOfMenu").css("display", "none"); /*nouveau*/
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
    });


    //CODE DE POPUP FAIRE UNE RECOMMANDATION
    $(".btn-recommandation").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-faire-une-recommandation").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-faire-une-recommandation").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });


    //CODE AU CLICK DU BOUTTON S'ABONNER A UN UTILISATEUR
    $(".btn-follow").click(function() {
        $(".btn-unfollow").css("display", "block");
        $(".menu-option-already-friend").css("display", "block");
        $(".btn-follow").css("display", "none");
    });

    //CODE SE DESABONNER OU SIGNALER LE COMPTE DU USER
    $(".menu-option-already-friend").click(function() {
        $(".option-block-already-friend").toggle();
    });


    //CODE DE POPUP AFFICHAGE DE A PROPOS
    $(".carre-block-apropos").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-a-propos").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popoup-a-propos").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });



    //CODE DE POPUP D'AFFICHAGE DE TOUTES LES RECOMMANDATIONS
    $(".voir-les-recommandations").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-toutes-les-recommandations").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
        $(".btn-by-members").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })
    });

    $(".mes-recommandations").click(function() {
        $(".couverture-du-commentaire").css("display", "block");
        $(".popoup-toutes-les-recommandations").css("display", "block");
        $(".dropdownOfMenu").css("display", "none");
    });

    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popoup-toutes-les-recommandations").css("display", "none");
        $(".dropdownOfMenu").css("display", "none");
    });





    //MENU RECOMMANDATIONS
    $(".btn-by-members").click(function() {

        $(".btn-by-communities").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-admins").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-members").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })

        $(".block-recommandations-communautes").css("display", "none")
        $(".block-recommandations-admins").css("display", "none")
        $(".block-recommandations-membres").css("display", "block")
    });


    $(".btn-by-communities").click(function() {

        $(".btn-by-members").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-admins").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-communities").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })

        $(".block-recommandations-admins").css("display", "none")
        $(".block-recommandations-membres").css("display", "none")
        $(".block-recommandations-communautes").css("display", "block")
    });


    $(".btn-by-admins").click(function() {

        $(".btn-by-members").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-communities").css({
            'background': '',
            'border': '1px solid #849999',
            'color': ''
        })

        $(".btn-by-admins").css({
            'background': '#336699',
            'border': '1px solid #336699',
            'color': 'white'
        })

        $(".block-recommandations-membres").css("display", "none")
        $(".block-recommandations-communautes").css("display", "none")
        $(".block-recommandations-admins").css("display", "block")
    }); // NOUVEAU CODE AJOUTE FIN







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



    //CODE DE LA GALERIE
    $(".imagesFile-Title").click(function() {
        $('.imagesFile-Title').css('font-weight', 'bold')
        $('.videosFile-Title').css('font-weight', 'normal')
        $(".container-videos-folder").css("display", "none")
        $(".container-image-folder").css("display", "block")
    });


    $(".videosFile-Title").click(function() {
        $('.videosFile-Title').css('font-weight', 'bold')
        $('.imagesFile-Title').css('font-weight', 'normal')
        $(".container-image-folder").css("display", "none")
        $(".container-videos-folder").css("display", "block")
    });




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
    //CODE AU CLICK DU BOUTTON "OUI" SE DESABONNER DU USER
    $(".btn-oui-desabonnement").click(function() {
        $(".btn-unfollow").css("display", "none");
        $(".menu-option-already-friend").css("display", "none");
        $(".option-block-already-friend").css("display", "none");
        $(".btn-follow").css("display", "block");
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        $(".popup-quitter-communaute").css("display", "none");

    });
    //CODE DE FERMETTURE DE LA POPUP DESABONNEMENT D'UN USER
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
    });



    //CODE DE FERMETTURE DE TOUTE LES POPUP EN CLIQUANT SUR LE BOUTON "NON"
    $(".btn-non").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-supprimer-publication").css("display", "none");
        $(".popup-signaler-user").css("display", "none");
        $(".popup-desabonnement").css("display", "none");
        $(".popup-quitter-communaute").css("display", "none");

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
        $(".triste").css("height", "35px");
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









    //CODE D'OUVERTURE DE LA COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".div-profil").mouseover(function() {
        $(".cover-modification-photo-profil").css("display", "block");
    });
    //CODE DE FERMETTURE COUVERTURE DE CHANGEMENT DE LA PHOTO DE PROFIL
    $(".div-profil").mouseleave(function() {
        $(".cover-modification-photo-profil").css("display", "none");
    });









    //CODE D'APPARITION DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".cover-modification-photo-profil").click(function() {
        $(".cover-modification-photo-profil").css("display", "none");
        $(".couverture-du-commentaire").css("display", "block");
        $(".popup-preview-photo-de-profil").css("display", "block");
    });
    //CODE DE FERMETTURE DE LA POPUP DE PREVIEW DE TELECHARGEMENT DE LA PHOTO DE PROFIL
    $(".btn-annuler").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });
    $(".couverture-du-commentaire").click(function() {
        $(".couverture-du-commentaire").css("display", "none");
        $(".popup-preview-photo-de-profil").css("display", "none");
    });
    // NOUVEAU CODE AJOUTE FIN



    // FIXATION DES ASIDES
    var waypoint2 = new Waypoint({
        element: document.getElementById('block-recommandations'),
        handler: function(direction) {
            if (direction === 'up') {
                $('#block-recommandations').removeClass('a-fixer');

            } else {
                $('#block-recommandations').addClass('a-fixer');
                const width = $('#block-recommandations').width();
                $('#block-recommandations').css('width', width);
            }
            console.log('Basic waypoint triggered', this.triggerPoint, direction)
        },
    });


});