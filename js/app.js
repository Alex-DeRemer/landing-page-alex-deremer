//-------------------------------  Global Variables


// Stores all sections in an array
const sections = Array.from(document.querySelectorAll("section"));

//An empty array that will be filled with 
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





// Add class 'your-active-class' to section when near top of viewport
const activatedNavList = function()  {
  let windowPosition = window.pageYOffset;


  listItems.forEach( function ({elementSection})  {
      const topSection = elementSection.offsetTop - 250;
      const elementSectionContent = elementSection.offsetHeight + topSection;

      if (
          windowPosition > topSection &&
          windowPosition <= elementSectionContent
      ) {
          elementSection.classList.add('your-active-class');
      } else {
          elementSection.classList.remove('your-active-class');
      }
  });
};

// Event Listener to scroll to your-active-class
window.addEventListener('scroll', activatedNavList);



const nav = document.getElementById('navbar__list');

nav.addEventListener('click', function (event) {
    event.preventDefault();

    listItems.forEach( function ({elementSection, elementNav})  {
        if (elementNav === event.target) {
            elementSection.scrollIntoView({behavior: 'smooth'});
        }
    });
});



