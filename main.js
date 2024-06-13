// Substitua o JavaScript existente pelo seguinte:

document.getElementById('show-deck').addEventListener('click', function() {
    const deck = document.getElementById('deck').value;
    const modal = document.getElementById('modal');
    const modalCardPreview = document.getElementById('modal-card-preview');
    modalCardPreview.innerHTML = ''; // Limpar cartas anteriores

    let cardCount = 30;
    for (let i = 1; i <= cardCount; i++) {
        let img = document.createElement('img');
        img.src = `./Cartas${deck}/${i}.png`;
        img.alt = `Carta${i}`;
        img.classList.add('card');
        img.addEventListener('click', function() {
            if (img.classList.contains('clicked')) {
                img.classList.remove('clicked');
            } else {
                const allCards = document.querySelectorAll('.card');
                allCards.forEach(card => {
                    card.classList.remove('clicked'); // Remover 'clicked' de outras cartas clicadas
                });
                img.classList.add('clicked');
            }
        });
        modalCardPreview.appendChild(img);
    }
    modal.style.display = 'block'; // Mostrar o modal

    // Adicionar evento para ampliar a carta ao clicar nela em telas pequenas
    if (window.innerWidth <= 600) { // Defina o tamanho máximo para dispositivos móveis
        modalCardPreview.addEventListener('click', function(event) {
            if (event.target.classList.contains('card')) {
                event.target.classList.toggle('clicked');
            }
        });
    }
});

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none'; // Esconder o modal
});

// Fechar o modal quando clicar fora do conteúdo
window.addEventListener('click', function(event) {
    const modal = document.getElementById('modal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
