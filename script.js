const roles = [
    "AI & ML Engineer",
    "Problem Solver",
    "Full-Stack Web Developer"
];

let roleIndex = 0;
const typingElement = document.getElementById("typing-role");

function changeRole() {
    typingElement.textContent = roles[roleIndex];
    roleIndex = (roleIndex + 1) % roles.length;
}

// Initial call
setInterval(changeRole, 2500); // change every 2.5 seconds
