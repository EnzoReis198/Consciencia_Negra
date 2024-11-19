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

let intervalo = 1000;

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



    /***INICIO SLIDE DEPOIMENTOS DE VISITANTES***/

    var swiper = new Swiper(".meusDepoimentos", {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
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
      breakpoints:{
        640:{
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768:{
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024:{
          slidesPerView: 3,
          spaceBetween: 50,
        },
      },
    });


    /***FIM SLIDE DEPOIMENTOS DE VISITANTES***/








    document.getElementById('contact-form').addEventListener('submit', function(event) {
      event.preventDefault(); // Impede o envio real do formulário para fins de demonstração
      var confirmationMessage = document.getElementById('confirmation-message');
      confirmationMessage.textContent = "Sua mensagem foi enviada com sucesso! Entraremos em contato em breve.";
      confirmationMessage.style.display = 'block'; // Exibe a mensagem de confirmação
      confirmationMessage.style.backgroundColor = '#4CAF50'; // Cor verde de sucesso
      confirmationMessage.style.color = 'white';
      confirmationMessage.style.padding = '15px';
      confirmationMessage.style.marginTop = '20px';
      confirmationMessage.style.borderRadius = '5px';
  });