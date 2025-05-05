let nextDoom = document.getElementById('next');
let prevDoom = document.getElementById('prev');
let carouselDoom = document.querySelector('.carousel');
let listItemDoom = document.querySelector('.carousel .list');
let thumbnailDoom = document.querySelector('.carousel .thumbnail');

nextDoom.onclick = function(){
    showSlider('next');
}
prevDoom.onclick = function(){
    showSlider('prev');
}

let timeRunning = 3000;
let runTimeOut;

function showSlider(type){
    let itemSlider = document.querySelectorAll('.carousel .list .item');
    let itemThumbnail = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next'){
        listItemDoom.appendChild(itemSlider[0]);
        thumbnailDoom.appendChild(itemThumbnail[0]);
        carouselDoom.classList.add('next');
    }else{
        let positionLastItem = itemSlider.length - 1;
        listItemDoom.prepend(itemSlider[positionLastItem]);
        thumbnailDoom.prepend(itemThumbnail[positionLastItem]);
        carouselDoom.classList.add('prev');
    }

    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() =>{
        carouselDoom.classList.remove('next');
        carouselDoom.classList.remove('prev');
    }, timeRunning)
}

// 🟢 Funcționalitate pentru Info și Contact
const overlay = document.getElementById("overlay");
const modalContent = document.getElementById("modalContent");
const infoBtn = document.getElementById("infoBtn");
const contactBtn = document.getElementById("contactBtn");
const homeBtn = document.querySelector('a[href="#"]'); // primul link e Home

function showModal(type) {
    overlay.classList.remove("hidden");
    if (type === "info") {
        modalContent.innerHTML = "<p>Despre StealFrame</p><p>StealFrame este o galerie digitală interactivă dedicată tuturor formelor de artă – de la pictură clasică și sculptură, până la artă digitală, muzică experimentală și design contemporan.</p><p>Platforma oferă un spațiu virtual elegant și dinamic unde artiștii pot expune lucrările lor într-un mediu vizual captivant, inspirat din mișcări artistice emblematice precum De Stil.</p><p>Fiecare slide este o poveste – un univers în miniatură care pune în valoare nu doar creația artistică, ci și contextul său cultural și estetic. StealFrame încurajează descoperirea, inspirația și conectarea dintre artiști și publicul lor.</p>";
    } else if (type === "contact") {
        modalContent.innerHTML = `
            <h2>Contactează-ne</h2>
            <p>Email: exemplu@email.com</p>
            <p>Telefon: 0712345678</p>
            <p>Adresă: Str. Exemplu 123, București</p>
        `;
    }
}

infoBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("info");
});
contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    showModal("contact");
});

overlay.addEventListener("click", (e) => {
    if (e.target === overlay) {
        overlay.classList.add("hidden");
        modalContent.innerHTML = "";
    }
});

if (homeBtn) {
    homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const targetSlide = document.getElementById("first-slide");
    if (targetSlide) {
        targetSlide.scrollIntoView({ behavior: "smooth" });
    }
});

}
