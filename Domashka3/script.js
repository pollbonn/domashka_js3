function changeStyle(button) {
    if (button.style.backgroundColor === "blue") {
        button.style.backgroundColor = "red";
        button.style.margin = "40px";
    } else {
        button.style.backgroundColor = "blue";
        button.style.margin = "20px";
    }
}