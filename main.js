const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    if (body.classList.contains('light-mode')) {
        themeToggle.textContent = 'Switch to Dark Mode';
    } else {
        themeToggle.textContent = 'Switch to Light Mode';
    }
});

const generateBtn = document.getElementById('generate-btn');
const numberElements = document.querySelectorAll('.number');

generateBtn.addEventListener('click', () => {
    const lottoNumbers = generateLottoNumbers();
    displayNumbers(lottoNumbers);
});

function generateLottoNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const randomNumber = Math.floor(Math.random() * 45) + 1;
        numbers.add(randomNumber);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function displayNumber(number, element, delay) {
    setTimeout(() => {
        element.textContent = number;
        element.style.transform = 'scale(1.1)';
        element.style.boxShadow = '0 0 25px rgba(233, 69, 96, 0.7)';
        setTimeout(() => {
            element.style.transform = 'scale(1)';
            element.style.boxShadow = '0 0 15px rgba(233, 69, 96, 0.5)';
        }, 300);
    }, delay);
}

function displayNumbers(numbers) {
    numbers.forEach((number, index) => {
        displayNumber(number, numberElements[index], index * 200);
    });
}

// Initial generation
const lottoNumbers = generateLottoNumbers();
displayNumbers(lottoNumbers);
