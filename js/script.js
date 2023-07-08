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
$(".footerButton").click(handleFooterButtonClick);
$(".contactForm").submit(handleSubmit);
$(document).scroll(handleNavBar);