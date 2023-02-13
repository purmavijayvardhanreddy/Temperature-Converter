
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByClassName('body'));
var countnum=document.getElementById('count');
//console.log(countnum.innerHTML);
var val=countnum.innerHTML;
var s="vijayvardhan"
var n=s.length;
var i=-1;
function dec(){
    // val=val>0 ? val-1:0;
    // countnum.innerHTML=val;
    i=i<n ? i+1:n;
    countnum.innerHTML=s[i];
    if (i==n){
        countnum.innerHTML=s;
    clearInterval(intervl);
    }
}
var intervl=setInterval(dec,1000);
