// Seleciona os elementos
const menuButton = document.getElementById('menu-button-1');
const hiddenMenu = document.getElementById('hidden-menu-1');

// Adiciona eventos de focusin e focusout
menuButton.addEventListener('mouseenter', () => {
    hiddenMenu.classList.add('show'); // Mostra o menu
});

menuButton.addEventListener('mouseleave', () => {
    setTimeout(() => {
        hiddenMenu.classList.remove('show'); // Esconde o menu
    }, 200); // Pequeno delay para evitar fechar antes que o próximo botão seja clicado
});
