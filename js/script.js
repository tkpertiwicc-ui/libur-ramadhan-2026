// ==============================
// CARD ANIMATION
// ==============================
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 800);
    });
});

// ==============================
// AUDIO + OVERLAY
// ==============================
const overlay = document.getElementById("musicOverlay");
const music = document.getElementById("bgMusic");

overlay.addEventListener("click", () => {
    music.play();
    overlay.classList.add("hide");
    setTimeout(() => { overlay.style.display = "none"; }, 600);
});

// ==============================
// CALENDAR MODAL
// ==============================
const calendarButtons = document.querySelectorAll(".calendar-btn");
const modal = document.getElementById("calendarModal");
const closeBtn = modal.querySelector(".close-btn");
const calendarGrid = document.getElementById("calendarGrid");
const daysInFeb2026 = 28;

// ==============================
// Array global untuk alert
// ==============================
const liburDates = [
  "2026-02-16",
  "2026-02-17",
  "2026-02-18",
  "2026-02-19",
  "2026-02-20",
  "2026-02-21"
];
const masukDates = ["2026-02-23"];

// ==============================
// Event tombol kalender
// ==============================
calendarButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        calendarGrid.innerHTML = "";

        // Ambil tanggal yang mau di-highlight dari tombol ini saja
        const highlightDates = btn.dataset.dates.split(",");

        for (let day = 1; day <= daysInFeb2026; day++) {
            const div = document.createElement("div");
            div.textContent = day;
            const fullDate = `2026-02-${day.toString().padStart(2,"0")}`;
            div.classList.add("calendar-day");

            // kasih warna MERAH/Hijau hanya dari tombol ini
            if (highlightDates.includes(fullDate)) {
                if (masukDates.includes(fullDate)) {
                    div.classList.add("highlight-green");
                } else {
                    div.classList.add("highlight-red");
                }
            }

            // klik tanggal → alert
            div.addEventListener("click", () => {
                if (liburDates.includes(fullDate)) {
                    alert(`Tanggal ${fullDate} adalah hari libur`);
                } else if (masukDates.includes(fullDate)) {
                    alert(`Tanggal ${fullDate} adalah masuk kembali!`);
                } else {
                    alert(`Tanggal ${fullDate} biasa`);
                }
            });

            calendarGrid.appendChild(div);
        }

        modal.style.display = "flex";
    });
});

// ==============================
// CLOSE MODAL
// ==============================
closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
