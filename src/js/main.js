function setDefaultSelectValue() {
    const selectElement = document.querySelector("div.modal.fixed select");
    if (selectElement) {
        selectElement.value = "Default";
    }
}


function addAspectRatioToImage() {
    console.log("🔍 addAspectRatioToImage: Funzione chiamata");

    const novaImages = document.querySelectorAll("#nova form button img");
    console.log("🔍 addAspectRatioToImage: Immagini trovate:", novaImages.length);
    console.log("🔍 addAspectRatioToImage: Elementi trovati:", novaImages);

    if (novaImages.length === 0) {
        console.warn("⚠️ addAspectRatioToImage: Nessuna immagine trovata con il selettore '#nova form button img'");
        return;
    }

    novaImages.forEach((image, index) => {
            console.log(`🔍 addAspectRatioToImage: Elaborazione immagine ${index + 1}/${novaImages.length}`, image);
            console.log(`🔍 addAspectRatioToImage: Parent element dell'immagine ${index + 1}:`, image.parentElement);

            const aspectRatio = document.createElement("div");
            Object.assign(aspectRatio.style, {
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                overflow: "hidden",
                width: '95px',
                height: '95px',
                border: "2px solid lime",
                pointerEvents: "none"
            });

            console.log(`🔍 addAspectRatioToImage: Div aspect ratio creata per immagine ${index + 1}`, aspectRatio);

            // Aggiungi la div all'interno del pulsante
            image.parentElement.classList.add("relative");
            console.log(`🔍 addAspectRatioToImage: Classe 'relative' aggiunta al parent ${index + 1}`);

            image.parentElement.appendChild(aspectRatio);
            console.log(`🔍 addAspectRatioToImage: Aspect ratio div aggiunta al parent ${index + 1}`);
    });

    console.log("✅ addAspectRatioToImage: Funzione completata");
}

// Set per tracciare le immagini già processate
const processedImages = new Set();

function setupImageObserver() {
    console.log("🔍 setupImageObserver: Inizializzazione MutationObserver");

    const observer = new MutationObserver((mutations) => {
        console.log("🔍 MutationObserver: Rilevate modifiche al DOM", mutations.length);

        // Controlla se ci sono nuove immagini
        const novaImages = document.querySelectorAll("#nova form button img");

        if (novaImages.length > 0) {
            console.log("🔍 MutationObserver: Trovate", novaImages.length, "immagini");

            // Controlla se ci sono nuove immagini non ancora processate
            let hasNewImages = false;
            novaImages.forEach((img) => {
                if (!processedImages.has(img)) {
                    hasNewImages = true;
                    processedImages.add(img);
                }
            });

            if (hasNewImages) {
                console.log("🔍 MutationObserver: Rilevate nuove immagini, chiamo addAspectRatioToImage");
                addAspectRatioToImage();
            } else {
                console.log("🔍 MutationObserver: Immagini già processate, skip");
            }
        }
    });

    // Inizia ad osservare il body per modifiche
    const targetNode = document.getElementById('nova') || document.body;
    console.log("🔍 setupImageObserver: Osservazione di", targetNode.id || 'body');

    observer.observe(targetNode, {
        childList: true,
        subtree: true
    });

    console.log("✅ setupImageObserver: MutationObserver attivo");
}

document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM fully loaded and parsed");

    setDefaultSelectValue();

    // Avvia il MutationObserver per monitorare le immagini
    setupImageObserver();

    // Tentativo iniziale (nel caso le immagini siano già presenti)
    setTimeout(() => {
        console.log("🔍 Tentativo iniziale di processare le immagini");
        addAspectRatioToImage();
    }, 300);
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
document.addEventListener('inertia:finish', function() {
    goOnTopBox();
});
