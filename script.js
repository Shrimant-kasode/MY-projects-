// On page load, set theme from localStorage if available
if (localStorage.getItem('darkmode') === 'true') {
  document.body.classList.add('dark-mode');
}

document.getElementById('toggle-dark-mode').addEventListener('click', function() {
  const isDark = document.body.classList.toggle('dark-mode');
  localStorage.setItem('darkmode', isDark);
});
