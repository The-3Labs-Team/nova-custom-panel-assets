function setDefaultSelectValue() {
    const selectElement = document.querySelector("div.modal.fixed select");
    if (selectElement) {
        selectElement.value = "Default";
    }
}


function addAspectRatioToImage() {
    const novaImages = document.querySelectorAll("#nova form button img");

    novaImages.forEach((image) => {

            const aspectRatio = document.createElement("div");
            Object.assign(aspectRatio.style, {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                overflow: "hidden",
                width: '95px',
                height: '95px',
                border: "2px solid lime"
            });

            // Aggiungi la div all'interno del pulsante
            image.parentElement.classList.add("relative");
            image.parentElement.appendChild(aspectRatio);
    });
}

document.addEventListener("DOMContentLoaded", function() {
    setDefaultSelectValue()
    setTimeout(() => {
        console.log("DOM fully loaded and parsed");
        addAspectRatioToImage();
    } , 300);
})
