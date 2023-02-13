var headCls=document.getElementById('div');
var bt=document.getElementById('btn');
function fun(){
    if (headCls.classList.contains('headNew')){
        headCls.classList.remove('headNew');
    }
    else{
    headCls.classList.add('headNew');
}
}
bt.addEventListener('click',fun);
