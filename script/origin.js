const optionMenu = document.querySelector(".select-menu");
const selectBtn = document.querySelector(".select-btn");
const header_hei = document.querySelector(".header-list");
const option = document.querySelectorAll(".a_anc");
const hambu_click = document.querySelector(".hambu");
const closeBtn = document.querySelector(".close");

option.forEach(item => {
    item.addEventListener("click", function leiVeri(){
        header_hei.classList.toggle("header-list-hei");
        optionMenu.classList.toggle("active");
    })
});

selectBtn.addEventListener("click", () => {
    optionMenu.classList.toggle("active");
    header_hei.classList.toggle("header-list-hei");
});

hambu_click.addEventListener("click", () => {
    header_hei.classList.toggle("hide");
    hambu_click.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
});

closeBtn.addEventListener("click", () => {
    header_hei.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    hambu_click.classList.toggle("hide");

});