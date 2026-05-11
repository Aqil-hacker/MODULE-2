document.querySelectorAll(".slider").forEach(slider => {
    slider.addEventListener("input", function() {

        let emoji = this.previousElementSibling.querySelector(".emoji");
        let val = this.value;

        if (val <= 3) {
            emoji.textContent = "😡";
        }
        else if (val <= 6) {
            emoji.textContent = "😐";
        }
        else if (val <= 8) {
            emoji.textContent = "😊";
        }
        else {
            emoji.textContent = "🔥";
        }
    });
});

