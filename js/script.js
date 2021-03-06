$(function () {
    let categories = $('.category');
    let activeCategory = $('.category--active');
    let allProjects = $('.project');
    let websitesProjects = $('.project[data-category="websites"]');
    let gamesProjects = $('.project[data-category="games"]');
    let webAppsProjects = $('.project[data-category="web-apps"]');
    let desktopAppsProjects = $('.project[data-category="desktop-apps"]');
    let scroll = new SmoothScroll('a[href*="#"]', {
        speed: 800
    });
    const fadeInDuration = 600;

    const showArrowOffset = $('#home-section').height();

    $(document).scroll(function() {
        const pos = $(this).scrollTop();

        if(pos > 0) {
            $('.scroll-down-wrapper').fadeOut(300);
        } else {
            $('.scroll-down-wrapper').fadeIn(300);
        }
        
        if(pos > showArrowOffset) {
            $('.up-button').fadeIn(300);
        } else {
            $('.up-button').fadeOut(300);
        }
    });

    categories.click(function () {
        activeCategory.removeClass('category--active');
        activeCategory = $(this); // change active category
        $(this).addClass('category--active');
        allProjects.fadeOut(0);
        if (activeCategory.hasClass('category--all')) { // 'all' category
            allProjects.fadeIn(fadeInDuration);
        } else { // other category
            if (activeCategory.hasClass('category--websites')) {
                websitesProjects.fadeIn(fadeInDuration);
            } else if (activeCategory.hasClass('category--games')) {
                gamesProjects.fadeIn(fadeInDuration);
            } else if (activeCategory.hasClass('category--web-apps')) {
                webAppsProjects.fadeIn(fadeInDuration);
            } else if (activeCategory.hasClass('category--desktop-apps')) {
                desktopAppsProjects.fadeIn(fadeInDuration);
            }
        }
    });

    $('.skills-section__skill').mouseenter(function () {
        $(this).children('i').toggleClass('colored');
    });
    $('.skills-section__skill').mouseleave(function () {
        $(this).children('i').toggleClass('colored');
    });

});