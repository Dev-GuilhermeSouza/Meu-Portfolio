document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        // Remove a classe 'selected' de todos os links
        document.querySelectorAll('.nav-link').forEach(item => item.classList.remove('selected'));

        // Adiciona a classe 'selected' ao link clicado
        e.target.classList.add('.selected');
    });
});

let currentCardIndex = 0;

function showCard(index) {
  const cards = document.querySelectorAll('.container__article');
  if (index >= 0 && index < cards.length) {
    currentCardIndex = index;
    const offset = -index * 100; // 100% width for each card
    cards.forEach(card => {
      card.style.transform = `translateX(${offset}%)`;
    });
    updateButtons();
  }
}

function prevCard() {
  if (currentCardIndex > 0) {
    showCard(currentCardIndex - 1);
  }
}

function nextCard() {
  const cards = document.querySelectorAll('.container__article');
  if (currentCardIndex < cards.length - 1) {
    showCard(currentCardIndex + 1);
  }
}

function updateButtons() {
  const prevButton = document.querySelector('.prev');
  const nextButton = document.querySelector('.next');
  prevButton.disabled = currentCardIndex === 0;
  nextButton.disabled = currentCardIndex === document.querySelectorAll('.container__article').length - 1;
}

document.addEventListener('DOMContentLoaded', () => {
  showCard(currentCardIndex);
});
