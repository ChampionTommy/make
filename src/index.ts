import '../assets/styles/index.scss';

// tabs
function createTabs(tabsContainer: HTMLElement) {
  const tabs = Array.from(tabsContainer.querySelectorAll('.tabs__header-item')) as HTMLElement[];
  const tabContents = Array.from(tabsContainer.querySelectorAll('.tabs__content-item')) as HTMLElement[];

  function activateTab(tab: HTMLElement) {
    const targetTab = tab.dataset.tab;
    const targetContent = tabsContainer.querySelector<HTMLElement>(`.tabs__content-item[data-content="${targetTab}"]`);

    tabs.forEach(t => t.classList.remove('tabs__header-item--active'));
    tabContents.forEach(c => c.classList.remove('tabs__content-item--active'));

    tab.classList.add('tabs__header-item--active');
    targetContent?.classList.add('tabs__content-item--active');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => activateTab(tab));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const tabsContainer = document.querySelector<HTMLElement>('.tabs');
  if (tabsContainer) {
    createTabs(tabsContainer);
  }
});

// smoth-scroll in aside
function initSmoothScroll(): void {
  const navbarLinks: NodeListOf<HTMLAnchorElement> = document.querySelectorAll('.nav__list-item-hash');

  navbarLinks.forEach(link => {
    link.addEventListener('click', (event: MouseEvent) => {
      event.preventDefault();
      const sectionId = link.getAttribute('href');
      if (sectionId === "#link1") {
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


function setupInputValidation(inputId: string, errorId: string): void {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;
  const errorElement = document.getElementById(errorId) as HTMLDivElement;

  const updateInputState = (): void => {
    const isValid = inputElement.validity.valid;
    inputElement.classList.toggle('input__field--error', !isValid);
    errorElement.classList.toggle('input__error--show', !isValid);
  };

  const handleFocus = (): void => {
    if (!inputElement.classList.contains('input__field--error')) {
      inputElement.classList.add('input__field--hovered');
    }
  };

  const handleBlur = (): void => {
    inputElement.classList.remove('input__field--hovered');
  };

  inputElement.addEventListener('input', updateInputState);
  inputElement.addEventListener('focus', handleFocus);
  inputElement.addEventListener('blur', handleBlur);
}

setupInputValidation('email-input', 'email__error');


function createToggleableElement(elementId: string, optionsId: string): { open: () => void; close: () => void } {
  const element = document.getElementById(elementId);
  const options = document.getElementById(optionsId);

  if (!element || !options) {
    throw new Error(`Element with id '${elementId}' or '${optionsId}' not found.`);
  }

  const open = () => {
    options.style.display = 'block';
  };

  const close = () => {
    options.style.display = 'none';
  };

  element.addEventListener('click', () => {
    if (options.style.display === 'none' || options.style.display === '') {
      open();
    } else {
      close();
    }
  });

  return { open, close };
}

// Использование функции для создания элемента с возможностью открывать и закрывать
createToggleableElement('poppup', 'options');

function setupCheckboxBackgroundChange(): void {
  // Получаем элементы чекбокса и его родителя
  const checkboxInput: HTMLInputElement | null = document.querySelector('.checkbox-block__input');
  const checkboxBlock: HTMLElement | null = document.querySelector('.checkbox-block');

  if (!checkboxInput || !checkboxBlock) {
    console.error('Не удалось найти элементы чекбокса и его родителя.');
    return;
  }

  // Обработчик события изменения состояния чекбокса
  const handleCheckboxChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      checkboxBlock.style.backgroundColor = '#3E29E3';
    } else {
      checkboxBlock.style.backgroundColor = 'transparent'; // или любой другой цвет по умолчанию
    }
  };

  // Добавляем обработчик события на чекбокс
  checkboxInput.addEventListener('change', handleCheckboxChange);
}

// Вызываем функцию после загрузки DOM
document.addEventListener('DOMContentLoaded', setupCheckboxBackgroundChange);



function initAccordion() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item) => {
      const button = item.querySelector('.accordion__button');
      const content = item.querySelector('.accordion__content');
      if (button?.classList.contains("accordion__button--disabled")){
        toggleContent(content)
    }
      button?.addEventListener('click', () => {
        toggleContent(content);
      });
    });
  }
  function toggleContent(content: any) {
    content.classList.toggle('accordion__content--active');
  }

  document.addEventListener('DOMContentLoaded', initAccordion);

