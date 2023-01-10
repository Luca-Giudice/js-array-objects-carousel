// Recupero i bottoni

const prev = document.getElementById('prev');
const next = document.getElementById('next');

// Recupero le immagini
const images = document.querySelectorAll('.gallery img');

// metto la prima immagine come active
let currentActiveIndex = 0;
images [currentActiveIndex].classList.add('active');

// Eventi dinamici

// Aggancio evento a next
next.addEventListener('click', function(){
    // rimuovo la classe active
    images[currentActiveIndex].classList.remove('active')
    // incremento indice
    currentActiveIndex++;
    if(currentActiveIndex === images.length) currentActiveIndex = 0;
    // Assegno la classe active col nuovo indice
    images[currentActiveIndex].classList.add('active');
})

// Aggancio evento a prev
prev.addEventListener('click', function(){
    // rimuovo la classe active
    images[currentActiveIndex].classList.remove('active')
    // decremento indice
    currentActiveIndex--;
    if(currentActiveIndex < 0) currentActiveIndex = images.length -1;
    // Assegno la classe active col nuovo indice
    images[currentActiveIndex].classList.add('active');
})

