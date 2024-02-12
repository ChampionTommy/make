export function setupInputValidation(inputId: string, errorId: string): void {
  const inputElement = document.getElementById(inputId) as HTMLInputElement;
  const errorElement = document.getElementById(errorId) as HTMLDivElement;
  const labelElement = document.querySelector(`label[for="${inputId}"]`) as HTMLLabelElement;

  const updateInputState = (): void => {
    const isValid = inputElement.validity.valid;
    inputElement.classList.toggle('input__field--error', !isValid);
    errorElement.classList.toggle('input__error--show', !isValid);
    labelElement.classList.toggle('input__label--error', !isValid);
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
