function setDefaultSelectValue() {
    const selectElement = document.querySelector("div.modal.fixed select");
    if (selectElement) {
        selectElement.value = "Default";
    }
}
document.addEventListener("DOMContentLoaded", setDefaultSelectValue);
