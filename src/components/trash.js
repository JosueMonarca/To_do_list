export function createTrashElement() {
    const button = document.createElement('button');
    button.classList.add('trash-button');
    const trashIcon = document.createElement('span');
    trashIcon.classList.add('trash-icon');
    button.appendChild(trashIcon);
    return button;
}