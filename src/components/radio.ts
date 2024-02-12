export function setupRadioButton(radioId: string): void {
  const radioElement = document.getElementById(radioId) as HTMLInputElement;

  const handleChange = (): void => {
    console.log(`Radio button ${radioId} is ${radioElement.checked ? 'checked' : 'unchecked'}`);
  };

  radioElement.addEventListener('change', handleChange);
}

setupRadioButton('myRadio3');
