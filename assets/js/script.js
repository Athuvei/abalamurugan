
(function(){
  const burger = document.querySelector('[data-burger]');
  const mobile = document.querySelector('[data-mobile-nav]');
  const body = document.body;
  if (burger && mobile) {
    burger.addEventListener('click', () => mobile.classList.toggle('open'));
    mobile.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobile.classList.remove('open')));
  }
  const page = body.dataset.page;
  document.querySelectorAll('[data-nav]').forEach(link => {
    if (link.dataset.nav === page) link.classList.add('active');
  });
})();
