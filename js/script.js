$(function () {
    let categories = $('.category');
    let activeCategory = $('.category--active');
    let allProjects = $('.project');
    let websitesProjects = $('.project[data-category="websites"]');
    let gamesProjects = $('.project[data-category="games"]');
    let webAppsProjects = $('.project[data-category="web-apps"]');
    let scroll = new SmoothScroll('a[href*="#"]');

    categories.click(function () {
        activeCategory.removeClass('category--active');
        activeCategory = $(this); // change active category
        $(this).addClass('category--active');
        if (activeCategory.hasClass('category--all')) { // 'all' category
            allProjects.addClass('visible');
        } else { // other category
            allProjects.removeClass('visible');
            if (activeCategory.hasClass('category--websites')) {
                websitesProjects.addClass('visible');
            } else if (activeCategory.hasClass('category--games')) {
                gamesProjects.addClass('visible');
            } else if (activeCategory.hasClass('category--web-apps')) {
                webAppsProjects.addClass('visible');
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