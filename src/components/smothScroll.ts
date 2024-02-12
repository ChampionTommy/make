export function initSmoothScroll(): void {
  const navbarLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav__list-item-hash');

  navbarLinks.forEach((link) => {
    link.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href');
      if (sectionId === '#link1') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        scrollToSection(sectionId);
      }
    });
  });
}

function scrollToSection(sectionId: string | null): void {
  if (sectionId) {
    const targetSection = document.querySelector(sectionId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

document.addEventListener('DOMContentLoaded', initSmoothScroll);
