const display = document.getElementById("display");


// ========== Font Size ==========
const inputSize = document.getElementById("input-size");
const showSize = document.getElementById("show-size");
function changeSize() {
    const fontSize = inputSize.value;
    display.style.fontSize = `${fontSize}px`;
    showSize.innerText = fontSize;
}
inputSize.addEventListener("input", changeSize);
changeSize();

// ========== Letter Spacing ==========
const inputSpacing = document.getElementById("input-spacing");
const showSpacing = document.getElementById("show-spacing");
function changeSpacing() {
    const letterSpacing = inputSpacing.value;
    display.style.letterSpacing = `${letterSpacing}px`;
    showSpacing.innerText = letterSpacing;
}
inputSpacing.addEventListener("input", changeSpacing);
changeSpacing();

// ========== Padding ==========
const inputPadding = [];
for (let i = 0; i < 4; i++) { 
    inputPadding[i] = document.getElementById(`input-padding-${i+1}`);
}
const showPadding = document.getElementById("show-padding");
function changePadding() {
    let padding = "";
    for (let i = 0; i < inputPadding.length; i++) {
        padding += `${inputPadding[i].value}px ` ;
    }
    padding = padding.slice(0, -1);
    display.style.padding = padding;
    showPadding.innerText = padding;
}
for (let i = 0; i < inputPadding.length; i++) {
    inputPadding[i].addEventListener("input", changePadding);
}
changePadding();

// ========== Font Family ==========
const selectFont = document.getElementById("select-font");
const showFont = document.getElementById("show-font");
function changeFont() {
    const fontFamily = selectFont.value;
    display.style.fontFamily = fontFamily;
    showFont.innerText = fontFamily;
}
selectFont.addEventListener("change", changeFont);
changeFont();

// ========== Font Weight ==========
const selectWeight = document.getElementById("select-weight");
const showWeight = document.getElementById("show-weight");
function changeWeight() {
    const fontWeight = selectWeight.value;
    display.style.fontWeight = fontWeight;
    showWeight.innerText = fontWeight;
}
selectWeight.addEventListener("change", changeWeight);
changeWeight();

// ========== Font Style ==========
const selectStyle = document.getElementById("select-style");
const showStyle = document.getElementById("show-style");
function changeStyle() {
    const fontStyle = selectStyle.value;
    display.style.fontStyle = fontStyle;
    showStyle.innerText = fontStyle;
}
selectStyle.addEventListener("change", changeStyle);
changeStyle();

// ========== Color ==========
const inputColor = document.getElementById("input-color");
const showColor = document.getElementById("show-color");
function changeColor() {
    const color = inputColor.value;
    display.style.color = color;
    showColor.innerText = color;
}
inputColor.addEventListener("input", changeColor);
changeColor();

// ========== Background Color ==========
const inputBgColor = document.getElementById("input-bg-color");
const showBgColor = document.getElementById("show-bg-color");
function changeBgColor() {
    const bgColor = inputBgColor.value;
    display.style.backgroundColor = bgColor;
    showBgColor.innerText = bgColor;
}
inputBgColor.addEventListener("input", changeBgColor);
changeBgColor();

// ========== Text ==========
const enterText = document.getElementById("enter-text");
function changeText() {
    const text = enterText.value;
    display.innerText = text;
}
enterText.addEventListener("input", changeText);
changeText();