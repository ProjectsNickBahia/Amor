document.addEventListener("DOMContentLoaded", function() {
    const bouquet = document.getElementById('bouquet');

    const numberOfFlowers = 10; // Número de flores no buquê
    const animationDuration = 3000; // Duração da animação em milissegundos
    const delayBetweenFlowers = animationDuration / numberOfFlowers; // Atraso entre cada flor

    for (let i = 0; i < numberOfFlowers; i++) {
        setTimeout(function() {
            const flower = document.createElement('div');
            flower.classList.add('flower');
            bouquet.appendChild(flower);
        }, i * delayBetweenFlowers);
    }
});
