export function createElementsInSingleParent(parentElement, childElement, className, n) {
        for (let i = 0; i < n; i++) {
            const newElement = document.createElement(childElement);
            parentElement.appendChild(newElement);
            newElement.className = className;                    
    }
}

export function createElementsInMultipleParents(parentElements, childElement, className, n) {
    for (const parentElement of parentElements) {
        for (let i = 0; i < n; i++) {
            const newElement = document.createElement(childElement);
            parentElement.appendChild(newElement);
            newElement.className = className;                    
        }
    }
}

export function appReset(resetButton) {
    resetButton.addEventListener('click', () => {
        location.reload();
    })
}