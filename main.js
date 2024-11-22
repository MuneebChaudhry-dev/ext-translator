// document.getElementById('clickMe').addEventListener('click', () => {
//   const output = document.getElementById('output');
//   output.textContent = 'Button clicked! Welcome to your first extension!';
// });

document.getElementById('translateButton').addEventListener('click', () => {
  const inputText = document.getElementById('inputText').value;

  // For demonstration purposes, we'll reverse the text as "translation."
  const translatedText = inputText.split('').reverse().join('');

  // Display the "translated" text in the second text area.
  document.getElementById('translatedText').value = translatedText;
});
