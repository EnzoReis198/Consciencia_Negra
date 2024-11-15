let menu = document.querySelector(".menuLinks");
let menuDois = document.querySelector("#menuBtn");

menuDois.onclick = () =>{
    menu.classList.toggle('active');
}

/***SCROLL***/
window.onscroll = () =>{
  let topoSite = document.querySelector("header");

  topoSite.classList.toggle('sticky', window.scrollY > 100);
}



/***SLIDE DESTAQUE***/
    var swiper = new Swiper(".msSlider", {
      spaceBetween: 30,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });


    /***INICIO CONTADOR DO SITE***/

let campoConta = document.querySelectorAll('.numero');

let intervalo = 2000;

campoConta.forEach((campoConta) =>{

let valorInicial = 0;

let finalValor = parseInt(campoConta.getAttribute("enzo-c-valor"));

let duracao = Math.floor(intervalo/finalValor);

let contador = setInterval(function(){
  valorInicial += 1;
  
  campoConta.textContent = valorInicial;

if(valorInicial == finalValor){
  clearInterval(contador);
}

}, duracao);

});

    /***FIM CONTADOR DO SITE***/
