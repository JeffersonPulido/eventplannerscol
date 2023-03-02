const getDateFooter = () => {
    const year = document.getElementById("year");
    const yearCopy = year.textContent = new Date().getFullYear();
    year.innerHTML = yearCopy
}

window.addEventListener("load", (event) => {
    getDateFooter();
});