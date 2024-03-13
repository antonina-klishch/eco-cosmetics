"use strict";
window.addEventListener("hashchange", ()=>{
    if (window.location.hash === "#menu") document.body.classList.add("page__body--with-menu");
    else document.body.classList.remove("page__body--with-menu");
});
window.addEventListener("hashchange", ()=>{
    if (window.location.hash === "#oil") document.body.classList.add("page__body--with-menu");
    else document.body.classList.remove("page__body--with-menu");
});
const form = document.querySelector(".form");
form.addEventListener("submit", buttonClick, false);
function buttonClick(event) {
    event.preventDefault();
    form.reset();
}
const isNumericInput = (event)=>{
    const key = event.keyCode;
    return key >= 48 && key <= 57 || // Allow number line
    key >= 96 && key <= 105 // Allow number pad
    ;
};
const isModifierKey = (event)=>{
    const key = event.keyCode;
    return event.shiftKey === true || key === 35 || key === 36 || // Allow Shift, Home, End
    key === 8 || key === 9 || key === 13 || key === 46 || // Allow Backspace, Tab, Enter, Delete
    key > 36 && key < 41 || // Allow left, up, right, down
    // Allow Ctrl/Command + A,C,V,X,Z
    (event.ctrlKey === true || event.metaKey === true) && (key === 65 || key === 67 || key === 86 || key === 88 || key === 90);
};
const enforceFormat = (event)=>{
    if (!isNumericInput(event) && !isModifierKey(event)) event.preventDefault();
};
const formatToPhone = (event)=>{
    if (isModifierKey(event)) return;
    const input = event.target.value.replace(/\D/g, "");
    const areaCode = input.substring(0, 3);
    const middle = input.substring(3, 6);
    const last = input.substring(6);
    if (input.length > 6) event.target.value = `(${areaCode}) ${middle} - ${last}`;
    else if (input.length > 3) event.target.value = `(${areaCode}) ${middle}`;
    else if (input.length > 0) event.target.value = `(${areaCode}`;
};
const inputElement = document.querySelector('[type="tel"]');
inputElement.addEventListener("keydown", enforceFormat);
inputElement.addEventListener("keyup", formatToPhone);

//# sourceMappingURL=index.f75de5e1.js.map
