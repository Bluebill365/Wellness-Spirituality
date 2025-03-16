// Add event listeners to elements with the "under-development" class
document.querySelectorAll('.under-development').forEach(function (element) {
    element.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default link behavior
        alert('Sorry, this page is still under development.');
    });
});
