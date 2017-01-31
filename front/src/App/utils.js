export const addRemoveClassOnScroll = (elem, value) => {
  if (window.pageYOffset >= value) {
    let menuItems = document.querySelectorAll('.menu .item');
    [].map.call(menuItems, (item) => item.classList.remove('selected'));
    elem.classList.add('selected');
  } else {
    elem.classList.remove('selected');
  }
};

export const resizeMenuOnScroll = () => {
  let menu = document.getElementById('main-menu');
  let scrollHeight = document.getElementById('about-house');
  if (window.pageYOffset > scrollHeight.offsetTop - 100) {
    menu.classList.add('menu-smaller');
  } else {
    menu.classList.remove('menu-smaller');
  }
};
