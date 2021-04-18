$(function () {
  let header = $('#header')
  let into = $('#into')
  let intoH = into.innerHeight()
  let scroll = $(window).scrollTop()
  check(scroll, intoH)
  let nav = $('#nav')
  let burger = $('#burger')

  $(window).on('scroll resize', function () {
    scroll = $(this).scrollTop()
    intoH = into.innerHeight()
    check(scroll, intoH)
  })

  function check(scroll, intoH) {
    if (scroll > intoH) {
      header.addClass('fixed')
    } else {
      header.removeClass('fixed')
    }
  }

  $('[data-scroll]').on('click', function (e) {
    e.preventDefault()
    let elementId = $(this).data('scroll')
    nav.removeClass('show')

    let offsetelement = $(elementId).offset().top
    $('html,body').animate(
      {
        scrollTop: offsetelement - 60,
      },
      700
    )
  })

  $('#burger').on('click', function (e) {
    e.preventDefault()
    nav.toggleClass('show')
  })
  let slider = $('#clients__slider')
  slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: false,
  })
})
