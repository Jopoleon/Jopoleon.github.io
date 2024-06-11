document.getElementById('sendMessage').addEventListener('click', () => {
    if (window.Telegram.WebApp) {
        Telegram.WebApp.sendData("Hello from the mini app!");
    } else {
        alert("This function is only available within the Telegram app.");
    }
});

window.Telegram.WebApp.ready();
