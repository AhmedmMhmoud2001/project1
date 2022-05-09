/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
function showDetails(section) {
    var sectionType = section.getAttribute("data-section-type");
    console.log(sectionType)
    
    let sections = document.querySelectorAll("section");
    for (var i = 0; i < sections.length; i++) {
        let item = sections[i];
        var item_section = item.getAttribute("data-nav")
        console.log(item_section)
         if (sectionType === item_section) {
            item.classList.add('your-active-class');
            var scrollDiv = document.getElementById(item.id).offsetTop;
            window.scrollTo({ top: scrollDiv, behavior: 'smooth' });
         }
         else{
            item.classList.remove('your-active-class');
         }
    }
  }
