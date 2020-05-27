(function () {
  const navTabbar = document.getElementById('navTabbar');

  if (navTabbar) {
    // ---------------
    // variables
    // ---------------

    let links, underline, hero;

    links = document.querySelectorAll('.nav-tabbar-links .nav-tabbar-item');
    underline = document.querySelector('.nav-tabbar-underline');
    hero = document.querySelector('.hero');

    // ---------------
    // events
    // ---------------

    links.forEach((link, index) => {
      link.addEventListener('click', handleLinkClick);
    });

    window.addEventListener('resize', watchActiveWidth);

    // ---------------
    // functions
    // ---------------

    function init() {
      setActive(links[0]);
    }

    function watchActiveWidth() {
      links.forEach((link, index) => {
        if (link.classList.contains('is-active')) {
          underline.style.left = link.getBoundingClientRect().left + 'px';
          underline.style.width = link.clientWidth + 'px';
        }
      });
    }

    function setActive(link) {
      link.classList.add('is-active');
      let locationClass = link.getAttribute('data-city-label').toLowerCase();
      hero.className = `hero ${locationClass}`;
      underline.style.left = link.getBoundingClientRect().left + 'px';
      underline.style.width = link.clientWidth + 'px';
    }

    function handleLinkClick() {
      links.forEach((link, index) => {
        link.classList.remove('is-active');
      });
      setActive(this);
    }

    init();
  }
})();
