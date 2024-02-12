export function setupCheckboxBackgroundChange(): void {
  const checkboxInput: HTMLInputElement | null = document.querySelector('#myCheckbox3');
  const checkboxBlock: HTMLElement | null = checkboxInput?.closest('.checkbox-block') ?? null;
  const checkboxSpan: HTMLSpanElement | null = checkboxBlock?.querySelector('.checkbox-block__checkmark') ?? null;

  if (!checkboxInput || !checkboxBlock || !checkboxSpan) {
    console.error('Не удалось найти элементы чекбокса и его родителя.');
    return;
  }

  const handleCheckboxChange = (event: Event) => {
    const target = event.target as HTMLInputElement;
    if (target.checked) {
      if (checkboxSpan) { 
        checkboxSpan.style.backgroundColor = '#3E29E3';
      }
    } else if (checkboxSpan) { 
      checkboxSpan.style.backgroundColor = 'transparent';
    }
  };

  checkboxInput.addEventListener('change', handleCheckboxChange);
}

document.addEventListener('DOMContentLoaded', setupCheckboxBackgroundChange);
