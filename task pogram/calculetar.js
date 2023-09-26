var display = document.getElementById("display");
var buttons = document.querySelectorAll("button");
var btnArray = Array.from(buttons);
let input;
let hasError = false;

display.readOnly = true;

for (let i = 0; i < buttons.length; i++) {
  if (btnArray[i].id === "AC") {
    btnArray[i].addEventListener("click", () => {
      input = btnArray[i].textContent;
      display.value = "";
      hasError = false; 
    });
  } else if (btnArray[i].id === "DEL") {
    btnArray[i].addEventListener("click", () => {
      input = btnArray[i].textContent;
      display.value = display.value.slice(0, -1);
      display.scrollLeft = display.scrollWidth;
      hasError = false; 
    });
  } else if (btnArray[i].id === "equal") {
    btnArray[i].addEventListener("click", () => {
      if (display.value.includes("^")) {
        display.value = display.value.replace("^", "**");
      } else if (display.value.includes("x")) {
        display.value = display.value.replace("x", "*");
      } else if (display.value.includes("÷")) {
        display.value = display.value.replace("÷", "/");
      }

      try {
        display.value = eval(display.value);
        hasError = false; 
      } catch {
        display.value = "ERROR";
        hasError = true; 
      }
    });
  } else {
    btnArray[i].addEventListener("click", () => {
      input = btnArray[i].textContent;
      if (hasError) {
        display.value = "";
        hasError = false;
      }
      display.value += input;
      display.scrollLeft = display.scrollWidth;
    });
  }
}
