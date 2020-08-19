let App = {

  debug: true,
  initHandlers: () => {

  },
  initCookieTooltip: () => {


  },
  initFormHandlers: ()=> {
    // Main form handler
    $('.formbox__form').on('submit', function(e) {
      let fields = $(this).find('input');
      let validate = true;
      let button = $(this).find('button[type="submit"]');

      $(fields).each(function(index) {
        $(this).removeClass('formbox__form__input--error formbox__form__input--success');
        if ($(this).val() == '') {
          $(this).addClass('formbox__form__input--error');
          validate = false;
        } else {
          $(this).addClass('formbox__form__input--success');
        }
      });

      if (validate) {
        $(this).find('.formbox__form__btnhide').addClass('formbox__form__btnhide--hide');
        $(this).find('.formbox__loading').addClass('formbox__loading--show');
        $(button).attr('disabled',true);
      }
      e.preventDefault();

    });
  },
  initSliders: () => {
    let cheapSlider = $('#cheap-slider');
    let expensiveSlider = $('#expensive-slider');
    expensiveSlider.slick({
      dots: false,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      verticalSwiping: true,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
       {
         breakpoint: 991,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1,
           verticalSwiping: false,
           vertical: false,
           centerMode: true,
           variableWidth: true,
           autoplay: false,
           swipe: true,
           swipeToSlide:true,
           draggable:true
         }
       },
      ]
    });

    cheapSlider .slick({
      dots: false,
      vertical: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      verticalSwiping: true,
      arrows: false,
      autoplay: false
    });

    // On before slide change
    expensiveSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
      // Показываем соответствующий слайд на втором слайдере
      cheapSlider.slick('slickGoTo',nextSlide);
    });
  },
  init: function(){

    // Инициализация тултипа с принятием кукисов
    this.initSliders();

  }
}
