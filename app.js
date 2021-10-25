const toggleButton = document.getElementsByClassName("btn__menu")[0];
const navBarLinks = document.getElementsByClassName("nav__link--list")[0];

toggleButton.addEventListener('click', () => {
  navBarLinks.classList.toggle('active')
})

var lightbox = new SimpleLightbox('.gallery a', { /* options */ });

var mySwiper = new Swiper(".swiper__container", {
  speed: 1100,
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});