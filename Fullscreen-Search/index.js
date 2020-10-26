let openbtn=document.querySelector(".openBtn");
let closebtn=document.querySelector(".closebtn");
openbtn.addEventListener('click',()=>{
   document.getElementById("myOverlay").style.display = "block";
})
closebtn.addEventListener('click',()=>{
   document.getElementById("myOverlay").style.display = "none";
})
