// Seleciona os elementos
const menuButton = document.getElementById('menu-button-1');
const hiddenMenu = document.getElementById('hidden-menu-1');

// Variável para controle do timeout
let hideTimeout;

// Adiciona eventos para exibir o submenu
menuButton.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Cancela o timeout se o mouse voltar ao botão
    hiddenMenu.classList.add('show'); // Mostra o menu
});

// Adiciona eventos para esconder o submenu com delay
menuButton.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        hiddenMenu.classList.remove('show'); // Esconde o menu
    }, 500); // Delay de 500ms antes de esconder
});

// Mantém o submenu visível enquanto o mouse está nele
hiddenMenu.addEventListener('mouseenter', () => {
    clearTimeout(hideTimeout); // Cancela o timeout ao entrar no submenu
});

hiddenMenu.addEventListener('mouseleave', () => {
    hideTimeout = setTimeout(() => {
        hiddenMenu.classList.remove('show'); // Esconde o menu
    }, 500); // Aplica o mesmo delay ao sair do submenu
});
