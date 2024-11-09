const fallingImage = document.getElementById('falling-image');

// Array of quotes
const quotes = [
    '"When I was a lad I clopped four dozen times." - Anon',
    '"Sex with Purp." - Anon',
    '"Portal to Equestria!" - Anon',
    '"Why do they all have dicks!?" - Anon',
    '"We\'re anons to the core!" - Anon',
    '"Hey, is that Lauren Faust?!" - Anon',
];

// Function to get a random quote
function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];
}

// Display a random quote on page load
document.addEventListener('DOMContentLoaded', function() {
    window.scrollTo(0, 0); // Force users to go back to the top upon refresh
    const quoteElement = document.getElementById('Anon-quotes');
    quoteElement.textContent = getRandomQuote();
});

document.getElementById('enter-button').addEventListener('click', function() {
    // Setting the panel to go down
    fallingImage.style.top = '0px'; // Set final position

    const elementLeft = document.querySelector('.curtain-left');
    const elementRight = document.querySelector('.curtain-right');
    
    elementLeft.classList.add('animate-curtain-left');
    elementRight.classList.add('animate-curtain-right');
    
    // Hiding the button
    this.classList.add('fade-out');
    setTimeout(() => {
        this.style.display = 'none';
    }, 500)
    
    // Disable hidden overflow, let user scroll
    document.body.style.overflowY = 'scroll';

    // Let users interact immediately
    document.querySelector('.curtain-container').style.pointerEvents = 'none'; 

    // Hide the curtain container after the animation
    setTimeout(function() {
        document.querySelector('.curtain-container').style.display = 'none';
    }, 2000);
});

// Easter egg, changes the quote by clicking on the board
document.getElementById('falling-image').addEventListener('click', function() {
    const quoteElement = document.getElementById('Anon-quotes');
    quoteElement.textContent = getRandomQuote();
});

document.addEventListener('DOMContentLoaded', function() {
    const styleSelect = document.getElementById("style");
    const selectedStyle = localStorage.getItem("selectedStyle");

    // Set the select element to the last selected style from localStorage
    if (selectedStyle) {
        styleSelect.value = selectedStyle; // Set the selected option
        changeStyle(); // Call changeStyle to apply the class
    }

    // Attach the changeStyle function to the select change event
    styleSelect.addEventListener("change", changeStyle);

    function changeStyle() {
        const selectedStyle = styleSelect.value;
        if (selectedStyle === "Yotsuba-B") {
            document.documentElement.classList.add("Yotsuba-B");
            localStorage.setItem("selectedStyle", "Yotsuba-B"); // Store the selection
        } else {
            document.documentElement.classList.remove("Yotsuba-B");
            localStorage.setItem("selectedStyle", "default"); // Reset selection
        }
    }
});
