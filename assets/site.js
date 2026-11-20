const reveal=()=>{document.querySelectorAll('[data-reveal]').forEach((el)=>{if(el.getBoundingClientRect().top<innerHeight*.92)el.classList.add('visible')})};
const progress=()=>{const max=document.documentElement.scrollHeight-innerHeight;document.querySelector('.progress').style.width=(max?scrollY/max*100:100)+'%'};
addEventListener('scroll',()=>{reveal();progress()},{passive:true});reveal();progress();

addEventListener('load',reveal);addEventListener('resize',reveal);
