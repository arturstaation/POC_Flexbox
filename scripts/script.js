function changeDirection(direction, elemento) {
    const container = document.getElementById(elemento);
    container.style.flexDirection = direction;
}

function changeAlignItems(option) {
    const container = document.getElementById('container_align-items');
    container.style.alignItems = option;
}

function changeAlignContent(option) {
    const container = document.getElementById('container_align-content');
    container.style.alignContent = option;
}

function changeWrap(option, elemento) {
    const container = document.getElementById(elemento);
    container.style.flexWrap = option;
}
