// Random Tip 
const tips = [
  "Start slow and build gradually",
  "Keep a consistent running schedule",
  "Focus on good running form",
  "Use proper footwear",
  "Stay hydrated and fuel properly",
  "Stretch after each run",
  "Rest days are crucial",
  "Maintain good sleep habits",
  "Include interval training",
  "Use foam rollers for recovery"
];


document.addEventListener('DOMContentLoaded', () => {
  const btn = document.getElementById('randomTipBtn');
  const display = document.getElementById('tipDisplay');

  btn.addEventListener('click', () => {
    const random = tips[Math.floor(Math.random() * tips.length)];
    display.innerText = random;
  });
});
const lastModified = new Date(document.lastModified);

document.getElementById('lastModified').textContent =
  `Last modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
