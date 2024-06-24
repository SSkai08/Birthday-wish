let slideIndex = 0;
let wishes = [
    " Love's Special Day",
    "Wishing you a day filled with love and joy!",
    "You are the love of my life. Happy Birthday!"
];

let additionalWishes = [
    "Happy Birthday to the enchantress who fills my world with love and transforms every moment into pure magic.",
    "Here's to another year of amazing memories!",
    "You deserve all the happiness in the world."
];

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let wishText = document.getElementById("birthday-wish");
    let additionalWishText = document.getElementById("additional-wish");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    
    slides[slideIndex - 1].style.display = "block";
    wishText.innerHTML = wishes[(slideIndex - 1) % wishes.length];
    additionalWishText.innerHTML = additionalWishes[(slideIndex - 1) % additionalWishes.length];
    additionalWishText.style.color = getRandomColor();

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

document.addEventListener("DOMContentLoaded", function () {
    showSlides();
});
