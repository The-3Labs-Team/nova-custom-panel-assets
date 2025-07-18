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

/* Go On Top */
function goOnTopBox() {

    const current_url = window.location.href;
    let current_pathname = new URL(current_url);
    current_pathname = current_pathname.pathname;

    console.log(current_pathname)
    
    const cmsResourcesPattern = /^\/cms\/resources\/[^\/]+$/;
    if(cmsResourcesPattern.test(current_pathname)){
        const div = document.createElement('div');
        div.className = 'go-on-top-box';
        div.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2 160 448c0 17.7 14.3 32 32 32s32-14.3 32-32l0-306.7L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"/></svg>`

        div.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });

        document.body.appendChild(div);
    } else {
        const existingDiv = document.querySelector('.go-on-top-box');
        if (existingDiv) {
            existingDiv.remove();
        }
    }
}
document.addEventListener('inertia:finish', function(event) {
    goOnTopBox();
});
