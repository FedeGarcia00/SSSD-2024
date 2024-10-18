import HomePage from "./pages/HomePage.js";

export const navigateTo = (url) => {
    history.pushState({}, "", url);
    loadPage();
}

const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    navigateTo(event.target.href);
}

function loadPage() {
    // Carga la HomePage por defecto
    if (location.pathname === '/' || location.pathname === '/home') {
        new HomePage('container'); 
    }
}

window.route = route;
window.onpopstate = loadPage;

document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    });
    loadPage();
});
