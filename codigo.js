const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
const historias= document.querySelector(".historias")

next.addEventListener("click",()=>{
    historias.scrollLeft +=150;
});
prev.addEventListener("click",()=>{
    historias.scrollLeft -=150;
});


const menuLeft = document.querySelector('.menu_left');
const menuRight = document.querySelector('.menu_right');

function showScrollbar(event) {
    event.currentTarget.classList.add('show-scrollbar');
}

function hideScrollbar(event) {
    event.currentTarget.classList.remove('show-scrollbar');
}

menuLeft.addEventListener('mouseenter', showScrollbar);
menuLeft.addEventListener('mouseleave', hideScrollbar);

menuRight.addEventListener('mouseenter', showScrollbar);
menuRight.addEventListener('mouseleave', hideScrollbar);


