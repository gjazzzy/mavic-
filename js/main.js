$(document).ready(function () {
  $('.products__slider').slick({
    prevArrow:'<button class="slider-btn slider__btn-left"><img src="image/arrow-prev.svg" alt="#"></button>',
    nextArrow:'<button class="slider-btn slider__btn-right"><img src="image/arrow-next.svg" alt="#"></button>',
    arrows: true, //Вкл стрелок
    dots: false, // Вкл точек
    adaptiveHeight: true, // Адаптивные точки
    slidesToShow: 1, // Показ  кол-вл слайдов
    slidesToScroll: 1, // Скролл слайдов
    speed: 500, // Скорость перелистываться анимации
    infinite: false, // Бесконечность слайдера
    autoplay: true, // Авто-переключение
    autoplaySpeed: 1000, // Перелистыванье авто
    initialSlide: 0, // слайд начало
    pauseOnFocus: false, // Пауза при клике на слайд
    pauseOnDotsHover: false, // Пауза при наведении на Dots
    pauseOnHover: true, // Пауза при наведении на слайд
    draggable: true, // Нельзя на ПК! свайпить
    swipe: true, // Нельзя на тачскринах свайпить
    touchThreshold: 6, // Момент перелистыванья
    touchMove: true, // Ручное перелистыванье выкл
    waitForAnimate: true, // Быстрая перекрутка
    centerMode: true, // Центральный слайд
    variableWidth: true, // Авто-Адаптивный слайдер 

  
  appendArrows:$('.button-nav') // Расположение стрелок в отдельном меню 
  
  // responsive:[ // брекПоинт и его настройка
  //   {
  //     breakpoint: 500,
  //     settings: {
  //       slidesToShow:2
  //     }
  //   }, {
  //      breakpoint: 900,
  //     settings: {
  //       slidesToShow: 2
  //     }
  //   }
  //   ],
  // mobileFirst: true,// miv-width !
  });
});

