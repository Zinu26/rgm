const correctPin = "0321";
const TIME_LIMIT = 60 * 1000; // 1 minute


window.onload = () => {

    // Start flower animation
    setTimeout(() => {
        document.body.classList.remove("not-loaded");
    }, 1000);


    // Check if already unlocked
    const unlocked = sessionStorage.getItem("unlocked");
    const lastActive = sessionStorage.getItem("lastActive");


    if (unlocked === "true" && lastActive) {

        const elapsed = Date.now() - parseInt(lastActive);

        // If still within 1 minute
        if (elapsed < TIME_LIMIT) {

            showMenu();
            updateActivity();
            return;

        }

    }


    // Otherwise show PIN after animation
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

    const input = document.getElementById("pinInput").value;
    const message = document.getElementById("pinMessage");


    if (input === correctPin) {


        message.style.color = "#8cffb3";
        message.textContent = "Unlocked ❤️";


        // Save unlock status
        sessionStorage.setItem("unlocked", "true");
        sessionStorage.setItem("lastActive", Date.now());


        setTimeout(() => {

            showMenu();

        }, 1000);


    } else {


        message.style.color = "#ff8b8b";
        message.textContent = "Incorrect passcode";

        document.getElementById("pinInput").value = "";

    }

}



function showMenu() {

    document.getElementById("pinlock").classList.add("hidden");

    document.getElementById("mainMenu").classList.remove("hidden");

}



function updateActivity() {

    sessionStorage.setItem("lastActive", Date.now());

}


// Track activity while browsing
document.addEventListener("click", updateActivity);
document.addEventListener("keydown", updateActivity);