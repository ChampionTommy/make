export function createPoppupElement(elementId: string, optionsId: string): { open: () => void; close: () => void } {
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

createPoppupElement('poppup', 'options');
