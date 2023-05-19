const inputBox=document.getElementById("input-box");
const Listcontainer=document.getElementById("To-Do items includes");
function addTask(){
    if(inputBox.value===''){
        alert("You must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputBox.value;
        Listcontainer.appendChild(li)
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputBox.value='';
    saveData();
}
//to check and uncheck
Listcontainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

//to save data in browser
function saveData(){
    localStorage.setItem("data",Listcontainer.innerHTML);
}
//to sow saved list
function showlist(){
    Listcontainer.innerHTML=localStorage.getItem("data");

}
showlist();