export function initAccordion() {
  const accordionItems: NodeListOf<HTMLElement> = document.querySelectorAll('.accordion__item');

  accordionItems.forEach((item: HTMLElement) => {
    const button: HTMLButtonElement | null = item.querySelector('.accordion__button');
    const content: HTMLDivElement | null = item.querySelector('.accordion__content');

    if (!content) {
      console.error('Не удалось найти элемент');
      return;
    }

    if (button?.classList.contains('accordion__button--disabled')) {
      return;
    }

    button?.addEventListener('click', () => {
      if (content) {
        toggleContent(content);
      }
    });
  });
}

function toggleContent(content: HTMLDivElement) {
  content.classList.toggle('accordion__content--active');
}

document.addEventListener('DOMContentLoaded', initAccordion);
