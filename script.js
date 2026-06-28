const pages = document.querySelectorAll(".page");
const music = document.getElementById("music");

let currentPage = 0;

/* PAGE TRANSITION */
function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = pages.length - 1;
    }

    pages[currentPage].classList.add("active");

    // Play music after first click
    if (currentPage === 1) {
        music.play().catch(() => {});
    }

    pageFlash();
}

window.nextPage = nextPage;

/* FLASH EFFECT */
function pageFlash() {
    document.body.animate(
        [
            { filter: "brightness(1)" },
            { filter: "brightness(1.2)" },
            { filter: "brightness(1)" }
        ],
        {
            duration: 400
        }
    );
}

/* RUN AWAY BUTTON */
function randomMove(btn) {
    const x = Math.random() * 180 - 90;
    const y = Math.random() * 180 - 90;
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

const runBtn = document.getElementById("runBtn");
const finalRun = document.getElementById("finalRun");
const funText = document.getElementById("funText");

if (runBtn) {
    runBtn.addEventListener("mouseover", () => {
        randomMove(runBtn);
        funText.innerText = "ih boong deh 😜";
    });

    runBtn.addEventListener("click", () => {
        randomMove(runBtn);
        funText.innerText = "gabisa boong sama aku 😏";
    });

    runBtn.addEventListener("touchstart", (e) => {
        e.preventDefault();
        randomMove(runBtn);
        funText.innerText = "wleee kabur 😆";
    });
}

if (finalRun) {
    finalRun.addEventListener("mouseover", () => {
        randomMove(finalRun);
    });

    finalRun.addEventListener("touchstart", (e) => {
        e.preventDefault();
        randomMove(finalRun);
    });
}

/* MEMORY CAROUSEL */
const images = [
    "images/foto1.jpg",
    "images/foto7.jpg",
    "images/foto3.jpg",
    "images/foto4.jpg"
];

const texts = [
`Aku masih inget awal kita kenal.
Awalnya semuanya terasa biasa aja.
Cuma chat random, obrolan kecil, hal-hal sederhana.

Tapi anehnya, dari semua orang,
kamu pelan-pelan jadi orang yang paling sering ada di kepala gue.`,

`vey beruntung bngt bisa kenal kamu vey ga nyesel
pernah kenal sma kmu kamu orng nya baik,cantik,mandiri,kek nya vey
gaperlu khwatir ninggali kamu karna kmu pernah bilang kalo kmu gabutuh vey
kmu cuman syang aja sma vey dan finallyy ternayata bner kmu gabutuh vey
makasi ya tth udah pernah sesayang itu sama vey kalopun itu palsu 
itu bikin vey bahagia bngt sama kamu apalagi kamu serius wkwkw

kuterima kalah ini. senang bertemu denganmu,
mekarlah dengan indah, see you.`,

`aku pengen trus jadi orang yg bisa nemenin kmu di saat bahagia maupun saat sedih karna bagiku kamu bukan hanya seseorang yg aku cintai, kamu adalah seseorang yang aku hargai seseorang yang aku hormati seseorang yang aku kagumi dan seseorang yang selalu memiliki tempat istimewa di dalam hatiku jika suatu hari nanti aku ditanya tentang hal terbaik yg pernah diberikan semesta kepadaku maka aku akan menjawab dengan yakin bahwa salah satu hadiah terbaik yg pernah aku terima adalah dipertemukan denganmu...`,

`kmu makin bahagia yaa.. tapi sayangnya disaat vey udah ga di samping kamu,
di saat vey gabisa ngucapin, sayang kamu cantik banget pround of you sayang, tapi vey ttp seneng 
dan bahagia atas pencapaian kamu karna dari medsosnya buka denger lagsung dari ceritanya tapi vey jauh
lebih happy karena ternyata kamu bisa melanjutkan hidupnya denga lebih baik!!`
];

let memoryIndex = 0;

const carouselImg = document.getElementById("carouselImg");
const memoryText = document.getElementById("memoryText");
const nextMemory = document.getElementById("nextMemory");

if (nextMemory) {
    nextMemory.addEventListener("click", () => {
        memoryIndex++;

        if (memoryIndex >= images.length) {
            nextPage();
            return;
        }

        carouselImg.animate(
            [
                { opacity: 1, transform: "scale(1)" },
                { opacity: 0, transform: "scale(.85)" }
            ],
            { duration: 300 }
        );

        setTimeout(() => {
            carouselImg.src = images[memoryIndex];
            memoryText.innerText = texts[memoryIndex];

            carouselImg.animate(
                [
                    { opacity: 0, transform: "scale(.85)" },
                    { opacity: 1, transform: "scale(1)" }
                ],
                { duration: 500 }
            );
        }, 300);
    });
}

/* HEART SLIDER */
const heartRange = document.getElementById("heartRange");
const heart = document.getElementById("heart");

if (heartRange) {
    heartRange.addEventListener("input", () => {
        const val = heartRange.value;

        if (val < 25) {
            heart.innerText = "💔";
        } else if (val < 60) {
            heart.innerText = "🩷";
        } else {
            heart.innerText = "❤️";
        }

        heart.style.transform = `scale(${1 + val / 300})`;
    });
}

/* FLOATING PARTICLES */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("float-heart");
    heart.innerText = Math.random() > 0.5 ? "💗" : "💕";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.bottom = "0px";
    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 7000);
}

setInterval(createHeart, 1300);

/* PETALS */
function createPetal() {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * window.innerWidth + "px";
    petal.style.animationDuration = (4 + Math.random() * 4) + "s";

    document.body.appendChild(petal);

    setTimeout(() => petal.remove(), 8000);
}

setInterval(createPetal, 700);

/* BUTTON CLICK EFFECT */
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("click", () => {
        btn.animate(
            [
                { transform: "scale(1)" },
                { transform: "scale(.92)" },
                { transform: "scale(1.08)" },
                { transform: "scale(1)" }
            ],
            {
                duration: 300
            }
        );
    });
});

/* ===== PAGE 5 DRAG 360 FIX ===== */

window.addEventListener("DOMContentLoaded", () => {

  const album = document.getElementById("album3d");
  if (!album) return;

  let dragging = false;
  let lastX = 0;
  let rotateY = 0;
  let velocity = 0;

  album.addEventListener("mousedown", (e) => {
    dragging = true;
    lastX = e.clientX;
    album.style.cursor = "grabbing";
  });

  window.addEventListener("mousemove", (e) => {
    if (!dragging) return;

    let delta = e.clientX - lastX;
    rotateY += delta * 0.6;
    velocity = delta;

    album.style.transform = `rotateY(${rotateY}deg)`;

    lastX = e.clientX;
  });

  window.addEventListener("mouseup", () => {
    dragging = false;
    album.style.cursor = "grab";

    function inertia() {
      if (Math.abs(velocity) < 0.1) return;

      rotateY += velocity * 0.2;
      velocity *= 0.92;

      album.style.transform = `rotateY(${rotateY}deg)`;

      requestAnimationFrame(inertia);
    }

    inertia();
  });

});