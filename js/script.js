$.fn.isInViewport = function () {
  const elementTop = $(this).offset().top;
  const elementBottom = elementTop + $(this).outerHeight();

  const viewportTop = $(window).scrollTop();
  const viewportBottom = viewportTop + $(window).height();

  return elementBottom > viewportTop && elementTop < viewportBottom;
};

const handleNavBar = () => {
  if ($("#banner").isInViewport() && $("#header").hasClass("fixedNav")) {
    $("#header").removeClass("fixedNav");
  } else if (
    !$("#banner").isInViewport() &&
    !$("#header").hasClass("fixedNav")
  ) {
    $("#header").addClass("fixedNav");
  }
};

const handleFooterButtonClick = () => {
  location.href = location.pathname.includes("index")
    ? "./pages/contacto.html"
    : "../pages/contacto.html";
};

const handleLoader = () => {
    $(".loaderWrapper").fadeOut("slow");
}

$(document).ready(handleLoader);
$(".footerButton").click(handleFooterButtonClick);
$(document).scroll(handleNavBar);