// PWA service worker
if ("serviceWorker" in navigator)
{
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/serviceWorker.js")
            .then((res) => console.log("serviceWorker ok"))
            .catch((err) => console.log("serviceWorker not ok"));
    });
}
