const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');
menuButton.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton.setAttribute('aria-expanded','false');}));
document.getElementById('year').textContent=new Date().getFullYear();

// Reveal sections gently as they enter the viewport.
const revealTargets=document.querySelectorAll('.about-grid,.fact-strip,.quote-band,.journey-intro,.timeline-item,.skills-heading,.skill-card,.terminal,.works-intro,.work-card,.gallery-heading,.gallery-item,.contact-main');
revealTargets.forEach(el=>el.classList.add('reveal'));
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:.12});revealTargets.forEach(el=>observer.observe(el));}else{revealTargets.forEach(el=>el.classList.add('visible'));}

// Photo slots: add the matching image file in assets/images. Empty slots keep their designed placeholder.
document.querySelectorAll('.photo-slot img').forEach(img=>{
  const test=new Image();
  test.onload=()=>{img.src=img.dataset.src;img.parentElement.classList.add('has-photo');};
  test.onerror=()=>{};
  test.src=img.dataset.src;
});
document.querySelectorAll('.photo-slot').forEach(slot=>{
  const img=slot.querySelector('img');
  img.addEventListener('load',()=>slot.classList.add('has-photo'));
});

const audio=document.getElementById('soundtrack');
const toggle=document.getElementById('musicToggle');
const label=document.getElementById('musicLabel');
const icon=document.getElementById('musicIcon');
toggle.addEventListener('click',async()=>{
  if(audio.paused){
    try{await audio.play();toggle.classList.add('playing');label.textContent='NOW PLAYING';icon.textContent='Ⅱ';}
    catch(e){label.textContent='ADD YOUR SONG';icon.textContent='▶';}
  }else{audio.pause();toggle.classList.remove('playing');label.textContent='PLAY MY SOUNDTRACK';icon.textContent='▶';}
});
audio.addEventListener('ended',()=>{toggle.classList.remove('playing');label.textContent='PLAY MY SOUNDTRACK';icon.textContent='▶';});
