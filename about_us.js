// Add functionality to the "Explore Now" button
document.getElementById('Explore').addEventListener('click', function () {
    alert('Welcome to IGDB! Start exploring our game reviews now!');
});

// Dynamic greeting based on time of day
window.addEventListener('DOMContentLoaded', function () {
    const currentHour = new Date().getHours();
    let greetingMessage = "Welcome to IGDB!";
    if (currentHour >= 5 && currentHour < 12) {
        greetingMessage = "Good Morning, Welcome to IGDB!";
    } else if (currentHour >= 12 && currentHour < 18) {
        greetingMessage = "Good Afternoon, Welcome to IGDB!";
    } else if (currentHour >= 18 || currentHour < 5) {
        greetingMessage = "Good Evening, Welcome to IGDB!";
    }
    document.querySelector('.about h2').innerText = greetingMessage;
});

// Scroll-to-top functionality
const scrollToTopButton = document.createElement('button');
scrollToTopButton.innerText = '⬆ Top';
scrollToTopButton.id = 'scrollToTop';
document.body.appendChild(scrollToTopButton);

window.addEventListener('scroll', function () {
    scrollToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Add a theme switcher
const themeSwitcher = document.createElement('button');
themeSwitcher.innerText = '🌙';
themeSwitcher.id = 'themeSwitcher';
document.body.appendChild(themeSwitcher);

let isDarkMode = false;
themeSwitcher.addEventListener('click', function () {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle('dark-mode', isDarkMode);
    themeSwitcher.innerText = isDarkMode ? '☀️' : '🌙';

    // Update the About section background
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
        aboutSection.style.background = isDarkMode
            ? 'linear-gradient(360deg, gray,rgb(102, 100, 100) 100%)' // Dark gradient
            : 'linear-gradient(360deg, #fffff5 0%,#DFB6B2 100%)'; // Light gradient
    }

    // Update all lines (e.g., hr, borders) to white in dark mode
    const allLines = document.querySelectorAll('hr, .line-class'); 
    allLines.forEach(line => {
        line.style.borderColor = isDarkMode ? '#fff' : '#000';
    });
});


// Add typewriter effect for tagline
function typeWriterEffect(element, text, speed)
{
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else {
            setTimeout(() => {
                element.innerHTML = "";
                i = 0;
                type();
            }, 1000);
        }
    }
    type();
}





const taglineElement = document.querySelector('.about h3');
const taglineText = "Ready to level up your gaming knowledge?";
taglineElement.innerHTML = ""; // Clear initial content
typeWriterEffect(taglineElement, taglineText, 100);



// Add hover effect to "Explore Now" button
const exploreButton = document.getElementById('Explore');
exploreButton.addEventListener('mouseover', function () {
    exploreButton.classList.add('hover');
});
exploreButton.addEventListener('mouseout', function () {
    exploreButton.classList.remove('hover');
});
exploreButton.addEventListener('click', function () {
    exploreButton.innerText = "Let’s Go!";
    setTimeout(() => {
        exploreButton.innerText = "Explore Now";
    }, 2000);
});
