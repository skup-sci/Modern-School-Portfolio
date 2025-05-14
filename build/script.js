let currentLang = 'en';

async function loadLanguage(lang) {
  const response = await fetch('./lang.json');
  const data = await response.json();

  document.getElementById('schoolName').innerText = data[lang].schoolName;
  document.getElementById('about').innerText = data[lang].about;
  document.getElementById('contact').innerText = data[lang].contact;
}

document.getElementById('languageToggle').addEventListener('change', (e) => {
  currentLang = e.target.value;
  loadLanguage(currentLang);
});

window.onload = () => loadLanguage(currentLang);
