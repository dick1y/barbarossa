new Swiper('.cosmetics__slider', {
    slidesPerView: 4,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    breakpoints: {  
      320: {
        slidesPerView: 2,
        spaceBetween: 10,},
      520: {
        slidesPerView: 3,
        spaceBetween: 20, },
      720: {
        slidesPerView: 4,
        spaceBetween: 30, },
    },
})
new Swiper('.articles__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.articles__slider-nav-next',
        prevEl: '.articles__slider-nav-prev',
      },
      breakpoints: {  
        320: {
          slidesPerView: 2,
          spaceBetween: 10,},
        520: {
          slidesPerView: 2,
          spaceBetween: 10, },
        720: {
          slidesPerView: 4,
          spaceBetween: 30, },
      },
})

new Swiper('.news__slider', {
    slidesPerView: 3,
    loop: true,
    spaceBetween: 30,
    navigation: {
        nextEl: '.news__slider-nav-next',
        prevEl: '.news__slider-nav-prev',
      },
      breakpoints: {  
        320: {
          slidesPerView: 2,
          spaceBetween: 10,},
        420: {
          slidesPerView: 2,
          spaceBetween: 10, },
        720: {
          slidesPerView: 4,
          spaceBetween: 30, },
      },
})
main();
  async function main() {
      // Промис `ymaps3.ready` будет зарезолвлен, когда загрузятся все компоненты API
      await ymaps3.ready;

      // Создание карты
      map = new ymaps3.YMap(document.getElementById('map'), {
          location: {
              // Координаты центра карты
              // Порядок по умолчанию: «долгота, широта»
              center: [76.948451, 43.242841],

              // Уровень масштабирования
              // Допустимые значения: от 0 (весь мир) до 21.
              zoom: 18
          }
      });

      // Добавляем слой для отображения схематической карты
      map.addChild(new ymaps3.YMapDefaultSchemeLayer());
  }