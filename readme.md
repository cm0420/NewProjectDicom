## README - Projeto de Página Institucional UFVJM

Este projeto é uma página institucional representando a **Universidade Federal dos Vales do Jequitinhonha e Mucuri (UFVJM)**. O layout responsivo e moderno foi desenvolvido para proporcionar uma navegação intuitiva e organizada.

---

### **Estrutura do Projeto**

1. **HTML**:
   - Estruturação semântica com tags `<header>`, `<main>`, `<aside>`, `<footer>`.
   - Inclusão de uma barra superior (`top-bar`) e um menu interativo com submenus.
   - Utilização de imagens e textos representativos para a instituição.

2. **CSS**:
   - Arquitetura separada por seções:
     - **Header e Top-bar**: Estilos para o cabeçalho e barra superior.
     - **Aside**: Estilos para as barras laterais com informações adicionais.
     - **Main**: Estilos para o conteúdo principal, incluindo cartões de imagem com legendas.
   - Implementação de responsividade para diferentes tamanhos de tela.

3. **JavaScript**:
   - Submenu interativo:
     - Exibição e ocultação com `mouseenter` e `mouseleave`.
     - Delay controlado para evitar comportamento inesperado ao sair do submenu.

---

### **Seções do Código**

#### **1. Header e Top-bar**
- Contém a identidade visual da UFVJM, incluindo o logotipo e o título da instituição.
- Barra superior (`top-bar`) com links úteis para acesso rápido.
- Barra inferior com um menu interativo e uma barra de pesquisa.

**CSS de Header:**
- Responsividade ajusta o layout para dispositivos menores.
- Elementos como logotipo e título são centralizados em telas pequenas.

**JavaScript:**
- Implementa o submenu interativo para o botão "Setores".

#### **2. Asides (Barras Laterais)**
- **Esquerda**: Informações sobre a UFVJM.
- **Direita**: Informações sobre o DICOM (Diretoria de Comunicação Social).

**CSS de Asides:**
- Design com bordas coloridas, espaçamento uniforme, e tipografia consistente.
- Ajuste de largura para ocupar 100% da tela em dispositivos móveis.

#### **3. Main (Conteúdo Principal)**
- Inclui um layout de cartões com imagens e textos explicativos.
- Destaques:
  - Biblioteca UFVJM.
  - Programas de ingresso (ENEM 2024).
  - Curso de Sistemas de Informação.
  - Campus JK.

**CSS de Main:**
- Design em grade (grid) para organização dos cartões.
- Animações suaves ao passar o mouse sobre os cartões.

**Responsividade de Main:**
- Alteração da grade para exibir um cartão por linha em dispositivos menores.

---

### **Como Executar o Projeto**

1. **Estrutura de Arquivos**:
   - `index.html`: Código principal da página.
   - `styles/global.css`: Importa os styles seguintes, para anexar no index.html. 
    - `styles/header.css`
    - `styles/aside.css`
    - `styles/main.css`
   - `scripts/index.js`: Submenu interativo.

2. **Pré-requisitos**:
   - Navegador moderno (Google Chrome, Mozilla Firefox, etc.).
   - Conexão com a internet para carregar fontes externas.

3. **Passos para Visualizar**:
   - Abra o arquivo `index.html` no navegador.
   - Explore o menu interativo, navegue pelos links e observe o comportamento responsivo em diferentes tamanhos de tela.

---

### **Possíveis Melhorias Futuras**
- Implementar um menu colapsável para dispositivos móveis.
- Adicionar animações suaves na barra de navegação.
- Melhorar a responsividade de alguns itens.

---

### **Tecnologias Utilizadas**
- **HTML5** para a estruturação semântica.
- **CSS3** para estilos e responsividade.
- **JavaScript** para funcionalidades interativas.

---

### **Agradecimentos**
"Este projeto foi desenvolvido como parte de uma prova seletiva de estágio no portal da UFVJM, com ênfase em acessibilidade, responsividade e design funcional. Sinta-se à vontade para contribuir com melhorias ou sugestões! 😊