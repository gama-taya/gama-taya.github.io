/* Burger Menu */

const burgerMenuButton = document.getElementById('burger-menu-button');
const burgerMenu = document.querySelector('.burger-menu');

const burgerButtonBar1 = document.getElementById("burger-bar1");
const burgerButtonBar2 = document.getElementById("burger-bar2");
const burgerButtonBar3 = document.getElementById("burger-bar3");

burgerMenuButton.onclick = function() {
    burgerMenu.classList.toggle('open');
    burgerMenu.classList.toggle('close');

    if (burgerMenu.classList.contains('open')) {
        burgerMenuButton.classList.add("opened");

        // animation
        burgerButtonBar1.setAttribute("d", "M5.5 18L18.5 6");
        burgerButtonBar3.setAttribute("d", "M5.5 6L18.5 18");
        
        burgerButtonBar1.setAttribute("stroke-width", "2.5");
        burgerButtonBar3.setAttribute("stroke-width", "2.5");

        burgerButtonBar2.setAttribute("d", "M12 12L12 12");
    } else {
        burgerMenuButton.classList.remove("opened");

        // animation
        burgerButtonBar1.setAttribute("d", "M4 18L20 18");
        burgerButtonBar3.setAttribute("d", "M4 6L20 6");

        burgerButtonBar1.setAttribute("stroke-width", "2");
        burgerButtonBar3.setAttribute("stroke-width", "2");

        burgerButtonBar2.setAttribute("d", "M4 12L20 12");
    }
}
