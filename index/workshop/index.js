const mybt=document.getElementsByClassName("my-bt");
mybt.addEventListener('')
setval(1)
function setval(val){
    const myop=document.getElementById("my-output");
myop.innerHTML=val;/* if we set inner html value to some value 
cannot set properties of null 
we can have only pne id for each element but we can have multiple classes*/
}
setval(2);

