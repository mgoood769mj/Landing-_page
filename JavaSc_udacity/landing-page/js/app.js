/**
 * Define Global Variables
 * 
*/
// An array containing the names of the sections
const sections_item = ["section1", "section2", "section3", "section4"];
// The navigation list element
const navListElement = document.querySelector('#navbar__list');
// The dynamic value calculated based on the window's inner width and height
const value = calculateValue();
  // Select the scroll-to-top button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
document.addEventListener('DOMContentLoaded', function() {
    addSection();
    createMenu();
  });

//Calculates the dynamic value based on the window's inner width and height.
function calculateValue() {
        const windowWidth = window.innerWidth;
        const windowHeight = window.innerHeight;
        const valueWindow = Math.min(windowWidth, windowHeight) * 0.1; // Adjust the multiplication factor as needed
        return valueWindow;
    }
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// Creates a new section element and appends it to the main element in the HTML document.
function addSection(){
const newSection = document.createElement('section');
newSection.id = 'section4';
newSection.setAttribute('data-nav', 'Section 4');
// Create the inner elements for the new section
const container = document.createElement('div');
container.classList.add('landing__container');
const heading = document.createElement('h2');
heading.textContent = 'Section 4';
const paragraph1 = document.createElement('p');
paragraph1.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
const paragraph2 = document.createElement('p');
paragraph2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
// Append the inner elements to the section
container.appendChild(heading);
container.appendChild(paragraph1);
container.appendChild(paragraph2);
newSection.appendChild(container);
// Append new section to the main element in the HTML document
const mainElement = document.querySelector('main');
mainElement.appendChild(newSection);
}

/**
 * Adds the class 'your-active-class' to the section that is near the top of the viewport.
 * Also adds the class 'active_Link' to the corresponding navigation menu link.
 */
function makeActive(){
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.menu__link');
    let index = 0;
    for (let section of sections) {
        const box = section.getBoundingClientRect();
        if (box.top <= value && box.bottom >= value) {
         section.classList.add('your-active-class');
         navLinks[index].classList.add('active_Link');
        } else {
            section.classList.remove('your-active-class') ; 
            navLinks[index].classList.remove('active_Link');
        }
           index++;
     }
    }


/**
 * Creates the navigation menu by dynamically generating menu items based on the sections_item array.
 * Appends the menu items to the navigation list element.
 */
function createMenu() {
    // Get the navigation list element
    const navListElement = document.querySelector('#navbar__list');
  
    // Create a temporary document fragment to hold the menu items
    const tempListil = document.createDocumentFragment();
  
    // Iterate over each section name in the sections_item array
    for (let nameOfSection of sections_item) {
      // Create an 'a' element to serve as the menu item with the menu__link class
      const a = document.createElement('a');
      a.innerHTML = nameOfSection;
      a.classList.add('menu__link');
      a.href = `#${nameOfSection}`;
  
      // Create an 'li' element to contain the 'a' element
      const li = document.createElement('li');
      li.appendChild(a);
  
      // Append the 'li' element to the temporary document fragment
      tempListil.appendChild(li);
    }
  
    // Append the menu items to the navigation list element
    navListElement.append(tempListil);
  }



// Scroll to section on link click
/**
 * Scrolls to the section corresponding to the clicked navigation menu link.
 * Prevents the default link behavior and scrolls to the target section smoothly.
 */
function clickSection(event) {
    const target = event.target;
    if (target.nodeName === 'A') {
      event.preventDefault();
      document.querySelector(target.getAttribute("href")).scrollIntoView({
        behavior: "smooth"
      });
    }
  }



// Function to handle scroll events
function handleScroll() {
  // Show or hide the scroll-to-top button based on the scroll position
  if (window.scrollY > window.innerHeight) {
    scrollToTopBtn.style.display = 'block'
  } else {
    scrollToTopBtn.style.display = 'none';
  }
}
// Function to scroll to the top of the page
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

 // Event listener to trigger the clickSection function when a navigation menu link is clicked
  navListElement.addEventListener('click', clickSection);
  // Event listener to trigger the handleScroll function on scroll
  window.addEventListener('scroll', handleScroll);
  // Event listener to scroll to the top when the scroll-to-top button is clicked
  scrollToTopBtn.addEventListener('click', scrollToTop);
  //Event listener to make the section Active
  window.addEventListener('scroll' ,makeActive );

 





