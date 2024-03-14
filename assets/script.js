const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]



let currentIndex = 0;
const totalSlides = slides.length;
const bannerImage = document.querySelector('.banner-img');
const bannerTagline = document.querySelector('#banner p');
const dotsContainer = document.querySelector('.dots');
const dots = [];

// Créer les points de navigation pour chaque diapositive
slides.forEach((slide, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotsContainer.appendChild(dot);
    dots.push(dot);

    dot.addEventListener('click', () => {
        goToSlide(index);
    });
});

// Fonction pour afficher une diapositive spécifique
function goToSlide(index) {
    if (index < 0 || index >= totalSlides) {
        return;
    }
    currentIndex = index;
    bannerImage.src = `./assets/images/slideshow/${slides[index].image}`;
    bannerTagline.innerHTML = slides[index].tagLine;

    // Mettre en surbrillance le point correspondant à la diapositive active
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('dot_selected');
        } else {
            dot.classList.remove('dot_selected');
        }
    });
}

// Fonction pour afficher la diapositive suivante
function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

// Fonction pour afficher la diapositive précédente
function previousSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

// Écouteurs d'événements pour les flèches gauche et droite
document.querySelector('.arrow_left').addEventListener('click', previousSlide);
document.querySelector('.arrow_right').addEventListener('click', nextSlide);

// Afficher la première diapositive au chargement de la page
goToSlide(currentIndex);
