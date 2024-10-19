document.getElementById('enter-button').addEventListener('click', function() {
    const fallingImage = document.getElementById('falling-image');

    fallingImage.style.top = '0px'; // Set final position

    this.classList.add('fade-out');

    // Move curtains
    document.querySelector('.curtain-left').style.transform = 'translateX(-100%)';
    document.querySelector('.curtain-right').style.transform = 'translateX(100%)';

    setTimeout(() => {
        this.style.display = 'none';
    }, 500)

    // Hide the curtain container after the animation
    setTimeout(function() {
        document.querySelector('.curtain-container').style.display = 'none';
    }, 2000);
});
