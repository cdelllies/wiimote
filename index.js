let text = true

toggleText()

setInterval(() => {
    toggleText();
}, 5000);

function toggleText() {
    if (text == true) {
        text = false
        document.querySelector(".app").innerHTML = "<p>Bienvenue !</p>"
    } else {
        text = true
        document.querySelector(".app").innerHTML = "<p>Abonnez-vous à DaTrade Premium</p>"
    }
}