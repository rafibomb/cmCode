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

  let links, underline;

  links = document.querySelectorAll('.nav-tabbar-links .nav-tabbar-item');
  underline = document.querySelector('.nav-tabbar-underline');

  // ---------------
  // events
  // ---------------

  // ---------------
  // functions
  // ---------------

  function init() {
    links[0].classList.add('is-active');
    underline.style.left = links[0].getBoundingClientRect().left + 'px';
    underline.style.width = links[0].clientWidth + 'px';
  }

  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('is-active');
      }
      this.classList.add('is-active');
      underline.style.width = this.clientWidth + 'px';
      underline.style.left = this.getBoundingClientRect().left + 'px';
    });
  }
  init();
}
