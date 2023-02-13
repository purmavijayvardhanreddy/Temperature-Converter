var bt=document.getElementById('btn');
var ul=document.getElementById('ul');
var inp=document.getElementById('inp');
var n=4;

bt.addEventListener('click',function(e){
    var tem = document.createElement('li');
    // var txt=document.createTextNode('lst item '+n);
    // n+=1
    var txt=document.createTextNode(inp.value);
    tem.appendChild(txt);
    tem.id="l"+n
    ul.appendChild(tem);
    console.log(h)

})