// separate out functions
// play with cool timings
// change left to translateX
// add resize event to update widths
// scope it -> iffee

// add local times in separate file

const navTabbar = document.getElementById('navTabbar');

if (navTabbar) {
  // ---------------
  // variables
  // ---------------

  let links, underline, activeLink;

  links = document.querySelectorAll('.nav-tabbar-links .nav-tabbar-item');
  underline = document.querySelector('.nav-tabbar-underline');

  // ---------------
  // events
  // ---------------

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', handleLinkClick);
  }

  window.addEventListener('resize', () => {
    for (var i = 0; i < links.length; i++) {
      watchActiveWidth(i);
    }
  });

  // ---------------
  // functions
  // ---------------

  function init() {
    setActive(links[0]);
  }

  function watchActiveWidth(i) {
    if (links[i].classList.contains('is-active')) {
      underline.style.left = links[i].getBoundingClientRect().left + 'px';
      underline.style.width = links[i].clientWidth + 'px';
    }
  }

  function setActive(link) {
    link.classList.add('is-active');
    underline.style.left = link.getBoundingClientRect().left + 'px';
    underline.style.width = link.clientWidth + 'px';
  }

  function handleLinkClick() {
    for (var j = 0; j < links.length; j++) {
      links[j].classList.remove('is-active');
    }
    setActive(this);
  }

  init();
}
