let display = document.querySelector("input[name='display']");

document.addEventListener("keydown", function(e) {
    let key = e.key;

    if (!isNaN(key) || "+-*/.".includes(key)) {
        display.value += key;
    } 
    else if (key === "Enter") {
        event.preventDefault();
        try {
            display.value = eval(display.value);
        } catch (err) {
            display.value = "Error";
        }
    }
    else if (key === "Backspace") {
        display.value = display.value.slice(0, -1);
    }
    else if (key === "Escape") {
        display.value = "";
    }
});
