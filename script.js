import WOW from 'wow.js';
import './style.scss';

document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('.header');

  const toggleHeader = () => {
    if (!header) return;
    const top = document.documentElement.scrollTop;
    if (top > 0) {
      header.classList.add('header--active');
    } else {
      header.classList.remove('header--active');
    }
  };

  const toggleFaq = e => {
    const btn = e.target.closest('.js-faq button');
    if (!btn) return;

    btn.classList.toggle('is-active');

    console.log({ btn });
  };

  const scrollTo = e => {
    const btn = e.target.closest('[href]');
    if (!btn) return;
    e.preventDefault();

    const id = btn.getAttribute('href').slice(1);
    const target = document.getElementById(id);
    if (!target) return;

    const top =
      target.getBoundingClientRect().top + window.scrollY - document.documentElement.clientTop - 50;

    window.scrollTo({ behavior: 'smooth', top });
  };

  const onScroll = () => {
    toggleHeader();
  };

  const onClick = e => {
    scrollTo(e);
    toggleFaq(e);
  };

  const wow = new WOW({
    offset: 200,
  });
  wow.init();

  window.addEventListener('scroll', onScroll);
  window.addEventListener('click', onClick);
});
