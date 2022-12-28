

const up = document.querySelectorAll(".header-list a[href^='#']");

function getScrollTopByHref(eleProject){

    const id = eleProject.getAttribute("href");
    return document.querySelector(id).offsetTop;
}

function scrollToPosition(toSection){

    window.scroll({
        top: toSection,
        behavior: "smooth"
    });
}

up.forEach( item => {

    item.addEventListener("click", (e) => {
        e.preventDefault();
    
        const toSection = getScrollTopByHref(e.target);
    
        scrollToPosition(toSection);
        
    });
})

