const backdrop = document.getElementById("popup-backdrop");

backdrop.addEventListener('click', function() {
    hideAllPopups();
});

document.querySelectorAll('.TourWrapper').forEach((element) => {
    element.addEventListener('click', function() {
        const popupId = this.getAttribute('data-popup');
        showPopup(popupId);
    });
});

function showPopup(popupId) {
    const popupElement = document.getElementById(popupId);
    if (popupElement) {
        popupElement.classList.add("popup-show");
        backdrop.classList.add("popup-show"); // Add popup-show class to backdrop
    }
}

function hideAllPopups() {
    document.querySelectorAll(".popup").forEach((popup) => popup.classList.remove("popup-show"));
    backdrop.classList.remove("popup-show"); // Remove popup-show class from backdrop
}
