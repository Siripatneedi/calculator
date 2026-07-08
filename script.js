const display = document.getElementById("display");

function appendValue(value){
    display.value += value;
}

function clearDisplay(){
    display.value = "";
}

function deleteLast(){
    display.value = display.value.slice(0,-1);
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch{
        display.value = "Error";
    }
}

document.addEventListener("keydown",function(event){

    if(!isNaN(event.key) || "+-*/.%".includes(event.key)){
        appendValue(event.key);
    }

    if(event.key==="Enter"){
        event.preventDefault();
        calculate();
    }

    if(event.key==="Backspace"){
        deleteLast();
    }

    if(event.key==="Escape"){
        clearDisplay();
    }
});
