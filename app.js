// JavaScript file: app.js
const eventa = document.querySelectorAll("div")
eventa.addEventListener('click', function() {
    // Function to handle the click event
    function handleNavClick(event) {
        event.preventDefault(); // Prevent the default action
        const targetId = event.target.id;
        const contentDiv = document.getElementById('content');

        switch(targetId) {
            case 'nav-home':
                contentDiv.style.display = "block" ;
                break;
            case 'nav-about':
                contentDiv.style.display = "block" ;
                break;
            case 'nav-contact':
                contentDiv.style.display = "block" ;
                break;
            default:
                contentDiv.innerHTML = '<h1>Error</h1><p>Unknown page!</p>';
        }
    }

    // Attach event listeners to all nav links
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(eventa => {
        eventa.addEventListener('click', handleNavClick);
    });
});
