const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-nav');

menuToggle.addEventListener('click', () => {
  const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!isExpanded));
  navigation.classList.toggle('is-open', !isExpanded);
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  }
});

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const form = event.currentTarget;
  const emirate = form.elements.emirate.value;
  const coverFor = form.elements['cover-for'].value;
  const result = document.querySelector('#form-result');

  result.textContent = `Thanks. You’re looking for cover in ${emirate} for ${coverFor.toLowerCase()}. A confirmed premium and available plans must be provided by the insurer—this site won’t guess at prices.`;
  result.hidden = false;
});

document.querySelector('#year').textContent = new Date().getFullYear();
