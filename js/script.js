$(function () {
    let categories = $('.category');
    let activeCategory = $('.category--active');
    let allProjects = $('.project');
    let websitesProjects = $('.project[data-category="websites"]');
    let gamesProjects = $('.project[data-category="games"]');
    let webAppsProjects = $('.project[data-category="web-apps"]');
    let scroll = new SmoothScroll('a[href*="#"]');
    const fadeInDuration = 600;

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