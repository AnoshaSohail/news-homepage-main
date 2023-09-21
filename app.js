const closeBtn = document.querySelector('#close');
const navMenu = document.querySelector('.navbar');
const menuBtn = document.querySelector('#menu');
const icon = document.querySelector('.icons');

// Function to show the navigation menu
function showNavMenu() {
  navMenu.style.display = 'block';
  icon.querySelector('#menu').style.display = 'none';
  icon.querySelector('#close').style.display = 'block';
}

// Function to hide the navigation menu
function hideNavMenu() {
  navMenu.style.display = 'none';
  icon.querySelector('#menu').style.display = 'block';
  icon.querySelector('#close').style.display = 'none';
}

// Add a click event listener to the menuBtn to show the navigation menu
menuBtn.addEventListener('click', showNavMenu);

// Add a click event listener to the closeBtn to hide the navigation menu
closeBtn.addEventListener('click', hideNavMenu);

// Function to handle viewport resize
function handleViewportResize() {
  if (window.innerWidth <= 850) {
    // Hide the navigation menu for mobile devices
    hideNavMenu();
  } else {
    // Show the menu icon and hide the close icon for larger screens
    icon.querySelector('#menu').style.display = 'block';
    icon.querySelector('#close').style.display = 'none';
  }
}

// Initial handling of viewport size
handleViewportResize();

// Add a resize event listener to detect changes in viewport width
window.addEventListener('resize', handleViewportResize);
