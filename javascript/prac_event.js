var par=document.getElementById('but');
//par.innerHTML='var';
//console.log('vij')
// function art(){
//     alert('buttonClicked');
// }
par.addEventListener('click',function(){
    alert('buttonClicked');
});
par.addEventListener('mouseover',function (){
    alert('mouseover');
})
par.addEventListener('mouseout',function (){
    alert('mouseout');
})
par.addEventListener('keydown',function (){
    alert('keydown');
})