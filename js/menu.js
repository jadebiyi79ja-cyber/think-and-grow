const $=id=>document.getElementById(id);
// mobile menu
const btn=$('menuBtn'),nav=$('nav');
btn.addEventListener('click',()=>{const o=nav.classList.toggle('open');btn.setAttribute('aria-expanded',o)});
nav.addEventListener('click',e=>{if(e.target.tagName==='A'){nav.classList.remove('open');btn.setAttribute('aria-expanded','false')}});
