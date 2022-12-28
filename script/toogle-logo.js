const logo_1 = document.querySelector(".an2");
const logo_2 = document.querySelector(".an3");

const alt_1 = () => {
    logo_1.classList.toggle("toogle");
}
const alt_2 = () => {
    logo_2.classList.toggle("toogle");
}

setTimeout(alt_1, 3000);
setTimeout(alt_2, 6000);