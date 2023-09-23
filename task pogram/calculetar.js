let display = document.getElementById('screen');
function isclicked(value) {
        if(display.innerText === 0) {
            display.innerText = value;
        } else {
            display.innerText += value;
        }
        return display.innerText;
}
let equals = document.getElementById('equalto');
const equalClicked = () =>{
    if(display.innerText !== "") {
        display.innerText = eval(display.innerText)
    } else {
        display.innerText = "";
    }
}
const clearClicked =() => {
    display.innerText = "";
}