var chbt=document.getElementById('ch');
var btnum=document.getElementById('para');
var a=0
function fun(){
    alert('danger');
    a+=1
    btnum.innerHTML=a
}
//bt.onclick=fun;
chbt.addEventListener('click',fun);
var btin=document.getElementById('num');
var btdec=document.getElementById('num1');
var btpar=document.getElementById('par');
var num=window.getComputedStyle(btpar).fontSize;
num=parseInt(num.substr(0,num.length-2));
function inc(){
    num=num+10;
    btpar.style.fontSize=num+"px";

}
btin.addEventListener('click',inc);
btdec.addEventListener('click',dec);
function dec(){
    num=num-10;
    btpar.style.fontSize=num+"px";

}
var ll=btpar.style.fontSize
console.log(num);