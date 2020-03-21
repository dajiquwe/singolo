const MENU = document.getElementById('navigation');

MENU.addEventListener("click", (event) => {
    MENU.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});
