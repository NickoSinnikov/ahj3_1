const cursor = document.querySelector(".cursor");

export default function mouse(event) {
    let x = event.clientX;
    let y = event.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
};
window.addEventListener("mousemove", mouse);