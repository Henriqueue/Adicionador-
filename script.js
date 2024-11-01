const button = document.getElementById('addButton');
const counterDiv = document.getElementById('counter');

function somar() {
    let currentCount = parseInt(counterDiv.textContent);

    if (currentCount < 10) {
        currentCount += 1;
        counterDiv.textContent = currentCount;
    } 
    
    else {
        console.log("Não é mais possível adicionar.");
    }
}

if (button) {
    button.addEventListener('click', somar);
}
