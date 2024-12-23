function checkAnswer(answer) {
    const result = document.getElementById('result');
    if (answer === 'CSS') {
        result.innerText = 'Correct! CSS is used for styling web pages.';
        result.style.color = 'green';
    } else {
        result.innerText = 'Incorrect! Try again.';
        result.style.color = 'red';
    }
}
function toggleMenu() {
    document.querySelector('.menu-icon').classList.toggle('change');
    document.getElementById('navMenu').classList.toggle('show');
  }
/*
// Toggle menu icon for mobile view
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// Toggle dropdown for each dropdown item
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', (event) => {
        event.stopPropagation(); // Prevent click from closing menu
        dropdown.classList.toggle('active');
    });
});

// Close dropdowns if clicked outside
window.addEventListener('click', (e) => {
    dropdowns.forEach(dropdown => {
        if (!dropdown.contains(e.target)) {
            dropdown.classList.remove('active');
        }
    });
});
*/