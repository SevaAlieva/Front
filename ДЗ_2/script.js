document.addEventListener('DOMContentLoaded', function() {
  const fontBtn = document.querySelector('.font-btn');
  const themeBtn = document.querySelector('.theme-btn');

  fontBtn.addEventListener('click', toggleFont);
  themeBtn.addEventListener('click', toggleTheme);
});

function toggleFont() {
  const currentFont = getComputedStyle(document.body).getPropertyValue('font-family');
  document.body.style.fontFamily = currentFont.includes('Montserrat') 
    ? 'var(--font-secondary)' 
    : 'var(--font-primary)';
}

function toggleTheme() {
  const currentBg = getComputedStyle(document.body).getPropertyValue('background-color');
  const isLight = currentBg === 'rgb(248, 244, 233)';
  
  document.body.style.backgroundColor = isLight 
    ? 'var(--bg-dark)' 
    : 'var(--bg-light)';
  
  document.body.style.color = isLight 
    ? 'var(--text-light)' 
    : 'var(--text-dark)';
}