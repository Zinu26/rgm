window.onload = () => {

    // Start the flower animation after 1 second
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);

    // Show PIN after animation finishes
    setTimeout(() => {
        document.getElementById("pinlock").classList.remove("hidden");
        document.getElementById("pinInput").focus();
    }, 7500);

};


// Allow pressing Enter
document.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        checkPin();
    }
});

function checkPin() {

    const correctPin = "0321";
    const input = document.getElementById("pinInput").value;
    const message = document.getElementById("pinMessage");

    if (input === correctPin) {

        message.style.color = "#8cffb3";
        message.textContent = "Unlocked ❤️";

        setTimeout(() => {

            // Hide PIN
            document.getElementById("pinlock").classList.add("hidden");

            // Show Menu
            document.getElementById("mainMenu").classList.remove("hidden");

        }, 1000);

    } else {

        message.style.color = "#ff8b8b";
        message.textContent = "Incorrect passcode";

        document.getElementById("pinInput").value = "";
    }

}