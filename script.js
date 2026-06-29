const pages = document.querySelectorAll(".page");
const music = document.getElementById("bgmusic");

let currentPage = 0;
let robloxStarted = false;
/* PAGE TRANSITION */
function nextPage() {
    pages[currentPage].classList.remove("active");
    currentPage++;

    if (currentPage >= pages.length) {
        currentPage = pages.length - 1;
    }

    pages[currentPage].classList.add("active");

    // Play music after first click
    if (currentPage === 1 && music) {
        music.play().catch(() => {});
    }

    // INIT ROBLOX SAAT PAGE SUDAH KEBUKA
    if (
        pages[currentPage].querySelector("#robloxScene") &&
        !robloxStarted
    ) {
        robloxStarted = true;
        initRobloxScene();
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
        funText.innerText = "ih boongg";
    });

    runBtn.addEventListener("click", () => {
        randomMove(runBtn);
        funText.innerText = "boong banget wkwkw";
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
            heart.innerText = "💗";
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

/* =========================
   ROBLOX 3D WORLD FIX
========================= */
function initRobloxScene() {

    const container = document.getElementById("robloxScene");
    if (!container || !window.THREE) return;

    const width = container.clientWidth;
    const height = container.clientHeight;

    if (width === 0 || height === 0) return;

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
        75,
        width / height,
        0.1,
        1000
    );

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true
    });

    renderer.setSize(width, height);
    container.appendChild(renderer.domElement);

    /* LIGHTS */
    const pinkLight = new THREE.PointLight(0xff2ad4, 4, 100);
    pinkLight.position.set(0, 0, 5);
    scene.add(pinkLight);

    const blueLight = new THREE.PointLight(0x00ffff, 3, 100);
    blueLight.position.set(5, 4, 5);
    scene.add(blueLight);

    /* CORE */
    const coreGeo = new THREE.IcosahedronGeometry(1.2, 1);
    const coreMat = new THREE.MeshStandardMaterial({
        color: 0xff4fd8,
        emissive: 0x551144,
        metalness: 0.7,
        roughness: 0.2
    });

    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    /* STARS */
    const starGeo = new THREE.BufferGeometry();
    const starCount = 2500;
    const positions = [];

    for (let i = 0; i < starCount; i++) {
        positions.push((Math.random() - 0.5) * 100);
        positions.push((Math.random() - 0.5) * 100);
        positions.push((Math.random() - 0.5) * 100);
    }

    starGeo.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3)
    );

    const stars = new THREE.Points(
        starGeo,
        new THREE.PointsMaterial({ size: 0.08 })
    );

    scene.add(stars);

    /* FOTO */
    const loader = new THREE.TextureLoader();
    const photoList = [
        "images/roblox1.jpg",
        "images/roblox2.jpg",
        "images/roblox3.jpg",
        "images/roblox4.jpg",
        "images/roblox5.jpg",
        "images/roblox6.jpg"
    ];

    const panels = [];

    for (let i = 0; i < photoList.length; i++) {
        const texture = loader.load(photoList[i]);

        const geo = new THREE.BoxGeometry(1.7, 1.7, 0.12);
        const mat = new THREE.MeshStandardMaterial({
            map: texture
        });

        const panel = new THREE.Mesh(geo, mat);

        const angle = (i / photoList.length) * Math.PI * 2;
        const radius = 4;

        panel.position.x = Math.cos(angle) * radius;
        panel.position.z = Math.sin(angle) * radius;
        panel.position.y = Math.sin(angle * 2) * 1.5;

        scene.add(panel);
        panels.push(panel);
    }

    camera.position.z = 9;

    let mouseX = 0;
    let mouseY = 0;

    document.addEventListener("mousemove", (e) => {
        mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
        mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
        requestAnimationFrame(animate);

        core.rotation.x += 0.01;
        core.rotation.y += 0.01;

        core.scale.setScalar(
            1 + Math.sin(Date.now() * 0.003) * 0.08
        );

        panels.forEach((panel, i) => {
            panel.rotation.y += 0.01;

            const angle = Date.now() * 0.0005 + i;
            const radius = 4.2;

            panel.position.x = Math.cos(angle) * radius;
            panel.position.z = Math.sin(angle) * radius;
            panel.position.y = Math.sin(angle * 2) * 1.2;
        });

        camera.position.x += (mouseX * 2 - camera.position.x) * 0.03;
        camera.position.y += (-mouseY * 2 - camera.position.y) * 0.03;
        camera.lookAt(scene.position);

        renderer.render(scene, camera);
    }

    animate();
}