function initApp() {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      const href = card.getAttribute("href");
      if (card.target === "_blank") {
        return;
      }
      event.preventDefault();
      window.location.href = href;
    });
  });
}

initApp();
