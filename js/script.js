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

const handleHamburgerClick = () => {
  if($(".hamburgerMenu").hasClass("open")){
    $(".hamburgerMenu").removeClass("open");
    $(".hamburgerMenu").addClass("close");
  } else {
    $(".hamburgerMenu").removeClass("close");
    $(".hamburgerMenu").addClass("open");
  }
}

const handleMenuClosingAnimation = (e) => {
  if(e.originalEvent.animationName === "hideMenu"){
    $(".hamburgerMenu").removeClass("close");
  }
}

const handleLoader = () => {
    $(".loaderWrapper").fadeOut("fast");
}

const handleSubmit = (e) => {
  e.preventDefault();
  Swal.fire({
    title: "¡Gracias!",
    text: "Su consulta ha sido enviado con éxito",
    icon: "success",
    confirmButtonText: "Aceptar",
  });
  e.target.reset();
}

$(window).on("load", handleLoader);
$(".hamburgerButton").click(handleHamburgerClick);
$(".hamburgerMenu").on("animationend", handleMenuClosingAnimation);
$(".footerButton").click(handleFooterButtonClick);
$(".contactForm").submit(handleSubmit);
$(document).scroll(handleNavBar);