function changeDirection(direction) {
    const container = document.getElementById('container_orientação_principal');
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

function changeWrap(option) {
    const container = document.getElementById('container_wrap');
    container.style.flexWrap = option;
}
