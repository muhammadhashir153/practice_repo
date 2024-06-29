let screen = document.getElementById("screen");

function showValue(value){
    if(value == "="){
        screen.value = eval(screen.value);
    }else if(value == 'c'){
        screen.value = "";
    }else{
        screen.value += value;
    }
}

const keys = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "-", "+", "/", "*", "(", ")"];

document.addEventListener("keyup", function(event){
    if(event.key == "Enter"){
        screen.value = eval(screen.value);
    }else if(event.key == "Delete"){
        screen.value = "";
    }else if(event.key == "Backspace"){
        screen.value = screen.value.slice(0, -1);
    }else if(keys.includes(event.key)){
        screen.value += event.key;
    }
});