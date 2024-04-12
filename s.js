// JavaScript for adding zoom effect on hover
const zoomElements = document.querySelectorAll('.zoom');

zoomElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'scale(1.1)';
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'scale(1)';
    });
});

// Sign-in button functionality
const signInButton = document.querySelector('.sign-in-button');

signInButton.addEventListener('click', () => {
    // Add your sign-in functionality here
    alert('Sign In button clicked!');
    // Replace alert with actual sign-in code
});