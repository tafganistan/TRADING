$(document).ready(function(argument) {

    $('.Donateurs').click(function() {
        $('.CoverActive').removeClass('CoverActive')
        $('#donateursCover').addClass('CoverActive')

        $('.mainActive').removeClass('mainActive')
        $('#DonateursMain').addClass('mainActive')

        $('.coverparent').css({
            'background': 'url("ressources/img/RS-members-doneurs.jpg")',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.cover').css('background', 'linear-gradient(90deg, #3d952bc2, #336699c9)')
        $('.bouton').css('color', '#019939')
        $('.boutton').css({
            'color': 'white'
        })
        $('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699')
        $('form').css('border-color', '#019969')

    });


    $('.Fondateurs').click(function() {
        $('.CoverActive').removeClass('CoverActive')
        $('#fondateursCover').addClass('CoverActive')

        $('.mainActive').removeClass('mainActive')
        $('#FondateursMain').addClass('mainActive')

        $('.coverparent').css({
            'background': 'url("ressources/img/RS-members-funders.jpg")',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.cover').css('background', 'linear-gradient(90deg, #3d952bc2, #336699c9)')
        $('.bouton').css('color', '#019939')
        $('.boutton').css({
            'color': 'white',
            'background': 'linear-gradient(90deg, #019939,  #336699)'
        })
        $('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
        $('form').css('border-color', '#019969')


    });


    $('.Honneurs').click(function() {
        $('.CoverActive').removeClass('CoverActive')
        $('#honneursCover').addClass('CoverActive')

        $('.mainActive').removeClass('mainActive')
        $('#HonneursMain').addClass('mainActive')

        $('.coverparent').css({
            'background': 'url("ressources/img/RS-members-honor.jpeg")',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.cover').css('background', 'linear-gradient(90deg, #3d952bc2, #336699c9)')
        $('.bouton').css('color', '#019939')
        $('.boutton').css({
            'color': 'white'
        })
        $('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
        $('form').css('border-color', '#019969')


    });


    $('.Actif').click(function() {
        $('.CoverActive').removeClass('CoverActive')
        $('#ActifCover').addClass('CoverActive')

        $('.mainActive').removeClass('mainActive')
        $('#actifMain').addClass('mainActive')

        $('.coverparent').css({
            'background': 'url("ressources/img/RS-authentification-background.PNG")',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.cover').css('background', '')
        $('.bouton').css('color', '#019969')
        $('.boutton').css({
            'color': 'white'
        })
        $('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
        $('form').css('border-color', '#019969')


    });


    $('.Assistants').click(function() {
        $('.CoverActive').removeClass('CoverActive')
        $('#AssistantsCover').addClass('CoverActive')

        $('.mainActive').removeClass('mainActive')
        $('#AssistantsMain').addClass('mainActive')

        $('.coverparent').css({
            'background': 'url("ressources/img/RS-members-assistants.jpeg")',
            'background-repeat': 'no-repeat',
            'background-size': 'cover',
            'background-position': 'center'
        })
        $('.cover').css('background', '')
        $('.bouton').css('color', '#019969')
        $('.boutton').css({
            'color': 'white'
        })
        $('.boule').css('background', 'linear-gradient(90deg, #019939,  #336699)')
        $('form').css('border-color', '#019969')


    });

    /*CODE D'OUVERTURE LA DROPDOWN DE RECHERCHE*/
    $('.formDropdownSearchBar').click(function() {
        $('.searchbar-dropdown').css("display", "block");
        $('.couverture-du-commentaire').css("display", "block");
    });

    /*CODE DE FERMETURE LA DROPDOWN DE RECHERCHE*/
    $('.couverture-du-commentaire').click(function() {
        $('.searchbar-dropdown').css("display", "none");
        $('.couverture-du-commentaire').css("display", "none");
    });


});