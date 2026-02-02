gsap.registerPlugin(ScrollTrigger);

// Loader
gsap.to("#loader",{
  opacity:0,
  duration:1,
  delay:1,
  onComplete:()=>document.getElementById("loader").remove()
});

// Hero animation
gsap.from(".hero h1",{y:60,opacity:0,duration:1});
gsap.from(".hero p",{y:40,opacity:0,delay:.3});

// Cards animation
gsap.utils.toArray(".card,.faculty-card,.resource,.review-card").forEach(el=>{
  gsap.from(el,{
    scrollTrigger:{trigger:el,start:"top 85%"},
    y:50,opacity:0,duration:.8
  });
});

// Counter
document.querySelectorAll(".count").forEach(counter=>{
  gsap.to(counter,{
    innerText:counter.dataset.target,
    duration:2,
    scrollTrigger:{trigger:counter,start:"top 80%"},
    snap:{innerText:1}
  });
});

// Mobile menu
const menu=document.querySelector(".menu");
const navLinks=document.querySelector(".nav-links");
let open=false;

menu.onclick=()=>{
  open=!open;
  gsap.to(navLinks,{x:open?"0%":"100%",duration:.6});
};
