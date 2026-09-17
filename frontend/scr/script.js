const mario = document.querySelector('.mario');

const jump = () => {

  if (mario.classList.contains('jump')) return;

  mario.classList.add('jump');

  setTimeout(() => {
    mario.classList.remove('jump');
  }, 700);
};

document.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    jump();
  }
});