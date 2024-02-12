export function createPoppupElement(elementId: string, optionsId: string): { open: () => void; close: () => void; selectOption: (optionId: string) => void } {
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

  const selectOption = (optionId: string) => {
    const previousSelected = options.querySelector('poppup__options_item--active');
    if (previousSelected) {
      previousSelected.classList.remove('poppup__options_item--active');
    }

    const newSelected = options.querySelector(`#${optionId}`);
    if (newSelected) {
      newSelected.classList.add('poppup__options_item--active');

      const poppupHeader = element.querySelector('.poppup__header p');
      if (poppupHeader) {
        poppupHeader.textContent = newSelected.textContent;
      }
    }
  };

  element.addEventListener('click', () => {
    if (options.style.display === 'none' || options.style.display === '') {
      open();
    } else {
      close();
    }
  });

  options.querySelectorAll('.poppup__options_item').forEach((option) => {
    option.addEventListener('click', () => {
      selectOption(option.id);
      close();
    });
  });

  return { open, close, selectOption };
}

createPoppupElement('poppup', 'options');



