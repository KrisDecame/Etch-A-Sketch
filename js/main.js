import { createElementsInSingleParent, createElementsInMultipleParents, appReset } from "/js/script.js";

export function main() {

    const number = prompt('Enter number between 1 and 100 to create a grid:');

    if (isNaN(number)) {
        alert('You must enter a number');
        location.reload();
    } else if (number < 0 || number > 100) {
        alert('Your number should be any between 0 and 100')
        location.reload();
    } else {
        
        let n = number;
        
        const mainAppDiv = document.getElementById('app');
        createElementsInSingleParent(mainAppDiv, 'div', 'app__row', n);
    
        const appRow = document.querySelectorAll('.app__row');
        createElementsInMultipleParents(appRow, 'div', 'app__box', n);

        mainAppDiv.addEventListener('mouseover', e => {
            if (e.target.matches('div.app__box')) {
                e.target.style.backgroundColor = 'yellow';
            }
        })
    
        const resetButton = document.getElementById('reset-button');
        appReset(resetButton);
    }
}