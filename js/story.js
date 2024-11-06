
document.addEventListener("DOMContentLoaded", function() {
    // Function to set equal height
    function setEqualHeight() {
        const cardWrappers = document.querySelectorAll('.card-wrapper');
        let maxHeight = 0;

        // Reset height
        cardWrappers.forEach(card => {
            card.style.height = 'auto';
        });

        // Get the maximum height
        cardWrappers.forEach(card => {
            maxHeight = Math.max(maxHeight, card.offsetHeight);
        });

        // Set all cards to the maximum height
        cardWrappers.forEach(card => {
            card.style.height = maxHeight + 'px';
        });
    }

    // Call function to set equal height
    setEqualHeight();

    // Reapply equal height on window resize
    window.addEventListener('resize', setEqualHeight);
});
