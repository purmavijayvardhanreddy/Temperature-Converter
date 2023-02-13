var bt=document.getElementById('btn');
// var bbt=document.querySelectorAll('div');
var tem=document.getElementById('div');
// var dv=document.querySelector('div');
var num=tem.innerHTML;
function fun(){
    
    num=num>0?num-1:0;
    tem.innerHTML=num
    if (num%2==0){
        bt.innerHTML="Even"
    }
    else{
        bt.innerHTML="Odd"
    }
    if (num==0){
        
        clearInterval(interval);
    }

}
var interval=setInterval(fun,1000);