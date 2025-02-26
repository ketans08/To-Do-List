const searchbox=document.querySelector(".search");
const searchbtn=document.querySelector(".addbtn");

const listContainer=document.querySelector("#list-container");

searchbtn.addEventListener("click",function(){
    if(searchbox.value === ''){
        alert("You have to right something");
    }else{
        let li=document.createElement("li");
        li.innerHTML=searchbox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);

    }
    searchbox.value="";
    saveData();
})


listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
    }
    saveData();
},false);




function saveData(){
    localStorage.setItem("data",listContainer.innerHTML);
}



function showTask(){
    listContainer.innerHTML=localStorage.getItem("data");
}

showTask();