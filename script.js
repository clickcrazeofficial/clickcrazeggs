const reveals=document.querySelectorAll('.reveal');

window.addEventListener('scroll',()=>{
reveals.forEach(el=>{
const top=el.getBoundingClientRect().top;
const h=window.innerHeight;
if(top<h-100) el.classList.add('active');
});
});
