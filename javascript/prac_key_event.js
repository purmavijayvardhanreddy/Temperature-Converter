var h=document.querySelector('#div1 >h');
var bt=document.getElementById('bt');
console.log(h.innerHTML);
document.body.addEventListener('keydown',function(){
    h.innerHTML="down";
})
document.body.addEventListener('keyup',function(){
    h.innerHTML+="up";
})
document.body.addEventListener('keypress',function(){
    h.innerHTML+="press";
})
bt.addEventListener('click',function(){
    h.innerHTML=0;
})
