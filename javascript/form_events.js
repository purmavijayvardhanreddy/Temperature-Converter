var usnm=document.getElementById('userName')
var sb=document.getElementById('form')
usnm.addEventListener('focus',function(){
    console.log('focused')
})
usnm.addEventListener('blur',function(){
    console.log('focused out')
})
usnm.addEventListener('change',function(){
    console.log('changed (it updates after focues out')
})
usnm.addEventListener('input',function(ev){
    console.log('changes')
    console.log(ev.target.value)
    var up=ev.target.value
    console.log(up.toUpperCase())

})


sb.addEventListener('submit',function(s){
    alert('submitted')
    s.preventDefault();

})