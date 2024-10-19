const fallingImage = document.getElementById('falling-image');
const images = ['/BillBoard1.png', '/BillBoard2.png'];
let currentImageIndex = 0;

// Function to change the image source
function changeImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    fallingImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
}

// Switch images every 500 ms
let imageSwitchInterval = setInterval(changeImage, 500);

document.getElementById('enter-button').addEventListener('click', function() {
    const fallingImage = document.getElementById('falling-image');

    // Set the image to fall down
    fallingImage.style.top = '0px'; // Set final position

    // Move curtains
    document.querySelector('.curtain-left').style.transform = 'translateX(-100%)';
    document.querySelector('.curtain-right').style.transform = 'translateX(100%)';

    // Hide the curtain container after the animation
    setTimeout(function() {
        document.querySelector('.curtain-container').style.display = 'none';
    }, 1000);
});
