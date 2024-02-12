const welcomePage: HTMLElement | null = document.getElementById('welcome');
const closeButton: HTMLElement | null = document.getElementById('close');
const openButton: HTMLElement | null = document.getElementById('open');

function closeWelcomePage(): void {
  if (welcomePage) {
    welcomePage.classList.remove('open');
    welcomePage.classList.add('close');
  }
}

function openWelcomePage(): void {
  if (welcomePage) {
    welcomePage.classList.remove('close');
    welcomePage.classList.add('open');
  }
}

if (closeButton) {
  closeButton.addEventListener('click', closeWelcomePage);
}

if (openButton) {
  openButton.addEventListener('click', openWelcomePage);
}
