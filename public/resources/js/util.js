// Language preference helper
function setPreferredLanguage(lang){
  try { localStorage.setItem('preferred_lang', lang); } catch(e) {}
}

function bindLanguageSwitchers(){
  var links = document.querySelectorAll('a.lang-switch[data-lang]');
  for (var i = 0; i < links.length; i++){
    links[i].addEventListener('click', function(ev){
      var lang = this.getAttribute('data-lang');
      if (lang) setPreferredLanguage(lang);
    });
  }
}

if (document.readyState === 'loading'){
  document.addEventListener('DOMContentLoaded', bindLanguageSwitchers);
} else {
  bindLanguageSwitchers();
}

