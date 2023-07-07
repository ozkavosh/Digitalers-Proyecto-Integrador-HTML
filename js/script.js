$.fn.isInViewport = function () {
    const elementTop = $(this).offset().top;
    const elementBottom = elementTop + $(this).outerHeight();

    const viewportTop = $(window).scrollTop();
    const viewportBottom = viewportTop + $(window).height();

    return elementBottom > viewportTop && elementTop < viewportBottom;
}

const handleNavBar = () => {
    if($("#banner").isInViewport() && $("#header").hasClass("fixedNav")){
        $("#header").removeClass("fixedNav");
    }else if(!$("#banner").isInViewport() && !$("#header").hasClass("fixedNav")){
        $("#header").addClass("fixedNav");
    }
};

document.addEventListener('scroll', (e) => {
    handleNavBar();
});
