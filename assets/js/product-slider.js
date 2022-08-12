$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 20,
  nav: true,
  dots: false,
  navText: ["<i class='far fa-arrow-left'></i>", "<i class='far fa-arrow-right'></i>"],
  responsive: {
    511: {
      items: 1
    },
    768: {
      items: 2
    },
    1000: {
      items: 4
    }
  }
})