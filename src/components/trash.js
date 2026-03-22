export function createTrashElement() {
    const button = document.createElement('button');
    button.classList.add('trash-button');
    button.textContent = '🗑️';
    return button;
}