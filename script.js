
const depoimentosSlider = document.querySelector('.depoimentos-slider');
const depoimentos = Array.from(document.querySelectorAll('.depoimento'));
let currentIndex = 0;

function showDepoimento(index) {
    depoimentos.forEach((depoimento, i) => {
        depoimento.style.display = i === index ? 'block' : 'none';
    });
}

function nextDepoimento() {
    currentIndex = (currentIndex + 1) % depoimentos.length;
    showDepoimento(currentIndex);
}

setInterval(nextDepoimento, 5000); 
showDepoimento(currentIndex); 

window.onscroll = function() {mostrarBotao()};

function mostrarBotao() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("botaoTopo").style.display = "block";
  } else {
    document.getElementById("botaoTopo").style.display = "none";
  }
}

function topoSuave() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function checkVisibility() {
    var sobreSection = document.getElementById('sobre');
    var rect = sobreSection.getBoundingClientRect();

   
    var positionTop = rect.top + window.pageYOffset;
    var windowHeight = window.innerHeight || document.documentElement.clientHeight;

  
    if (positionTop < window.pageYOffset + windowHeight) {
      sobreSection.classList.add('show');
    }
  }

  window.addEventListener('scroll', checkVisibility);

  
  window.addEventListener('load', checkVisibility);
