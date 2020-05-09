// add local times in separate file

(function () {
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

    window.addEventListener('resize', watchActiveWidth);

    // ---------------
    // functions
    // ---------------

    function init() {
      setActive(links[0]);
    }

    function watchActiveWidth() {
      for (var i = 0; i < links.length; i++) {
        if (links[i].classList.contains('is-active')) {
          underline.style.left = links[i].getBoundingClientRect().left + 'px';
          underline.style.width = links[i].clientWidth + 'px';
        }
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
})();
