var id1=document.getElementById('div1')
var bt=document.getElementById('bt')
var num=document.querySelector('#div2 > h')
console.log(num.innerHTML)
var t=0;

bt.addEventListener('click',function(){
    num.innerHTML=0;
    t=0;
})
id1.addEventListener('mousedown',function(){
    t+=1
    num.innerHTML=t
})
id1.addEventListener('mouseover',function(){
    t+=1
    num.innerHTML=t
})
id1.addEventListener('mouseup',function(){
    t+=1
    num.innerHTML=t
})

id1.addEventListener('click',function(){
    t+=1
    num.innerHTML=t
})
id1.addEventListener('dblclick',function(){
    t+=1
    num.innerHTML=t
})
id1.addEventListener('mousemove',function(){
    t+=1
    num.innerHTML=t
})
id1.addEventListener('mouseenter',function(){
    t+=1
    num.innerHTML=t
})
