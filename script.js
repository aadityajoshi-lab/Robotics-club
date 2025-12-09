const cursor = document.querySelector('#cursor');



    const onMouseChangePosition = (event) => {
      cursor.style.left = event.clientX + 'px';
      cursor.style.top = event.clientY + 'px';
    };

    onmousemove = onMouseChangePosition




const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const navbg = document.querySelector('.nav-bg');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    navbg.classList.toggle('active');
});


const hexWrapper = document.querySelector('.hex-wrapper');

const rows = 15;      // adjust as needed
const hexPerRow = 25; // adjust as needed

for (let r = 0; r < rows; r++) {

    const row = document.createElement('div');
    row.className = 'row';

    // Exactly same margin offset rules you used:
    row.style.marginTop = "-32px";
    row.style.marginLeft = (r % 2 === 0) ? "-50px" : "1px";

    for (let h = 0; h < hexPerRow; h++) {
        const hex = document.createElement('div');
        hex.className = 'hexagon';
        row.appendChild(hex);
    }

    hexWrapper.appendChild(row);
}



document.addEventListener("DOMContentLoaded", () => {
  const viewer = document.querySelector("spline-viewer");
  viewer.setAttribute("loading", "eager");
});