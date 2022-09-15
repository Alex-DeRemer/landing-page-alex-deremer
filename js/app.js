//-------------------------------  Global Variables

const sections = Array.from(document.querySelectorAll("section"));
const listItems = [];







//-------------------------------  Functions



//-------------------------------  Function to create nav
const buildNav = function (sections) {
  
  //Variable with ul stored inside
  const navigation = document.getElementById('navbar__list');

  //for each loop to add a li and an anchor element for every section
  sections.forEach( function(section) {
      const ulListItem = document.createElement('li');
      const anchor = document.createElement('a');
      

      anchor.textContent = section.dataset.nav;
      
      

      ulListItem.appendChild(anchor);
      navigation.appendChild(ulListItem);

      const listItem = {
          elementNav: anchor,
          elementSection: section
      }

      listItems.push(listItem);
      anchor.classList.add('menu__link');
  });


}

buildNav(sections);





// Add class 'active' to section when near top of viewport
const activeNavItem = function()  {
  let y = window.pageYOffset;


  listItems.forEach(({elementSection, elementNav}) => {
      const elementSectionTop = elementSection.offsetTop;
      const elementSectionContent = elementSection.offsetHeight + elementSectionTop;

      if (
          y <= elementSectionContent && y > elementSectionTop) {
            elementNav.classList.add('your-active-class');
      } else {
          elementNav.classList.remove('your-active-class');
      }
  });
};



// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


