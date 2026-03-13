const button = document.getElementById("changeTextBtn");
const message = document.getElementById("message");

button.addEventListener("click", function () {
  message.textContent = "✨ Ottimo! Hai appena dato un tocco più curato al tuo sito.";
});
