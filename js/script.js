// CARD ANIMATION
window.addEventListener("load", () => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add("show");
        }, index * 800);
    });
});

// AUDIO + OVERLAY
const overlay = document.getElementById("musicOverlay");
const music = document.getElementById("bgMusic");

overlay.addEventListener("click", () => {
    music.play();
    overlay.classList.add("hide");
    setTimeout(() => { overlay.style.display = "none"; }, 600);
});

// CALENDAR MODAL
const calendarButtons = document.querySelectorAll(".calendar-btn");
const modal = document.getElementById("calendarModal");
const closeBtn = modal.querySelector(".close-btn");
const calendarGrid = document.getElementById("calendarGrid");
const daysInFeb2026 = 28;

calendarButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        const highlightDates = btn.dataset.dates.split(",");
        calendarGrid.innerHTML = "";

        for (let day = 1; day <= daysInFeb2026; day++) {
            const div = document.createElement("div");
            div.textContent = day;
            const fullDate = `2026-02-${day.toString().padStart(2,"0")}`;

            if (highlightDates.includes(fullDate)) {
                if (btn.parentElement.classList.contains("masuk")) {
                    div.classList.add("highlight-green");
                } else {
                    div.classList.add("highlight-red");
                }
            }

            div.addEventListener("click", () => {
                const liburDates = ["2026-02-16","2026-02-17","2026-02-18","2026-02-21"];
                const masukDates = ["2026-02-23"];

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

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
});
