document.addEventListener("DOMContentLoaded", () => {
  const grids = document.querySelectorAll("[data-flashcard-grid]");

  grids.forEach((grid) => {
    const cards = Array.from(grid.querySelectorAll(".flashcard"));

    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("is-flipped");
      });
    });

    const toolbar = document.querySelector("[data-flashcard-toolbar]");
    if (!toolbar) {
      return;
    }

    toolbar.addEventListener("click", (event) => {
      const action = event.target.closest("[data-flashcard-action]");
      if (!action) {
        return;
      }

      const type = action.getAttribute("data-flashcard-action");
      if (type === "show-front") {
        cards.forEach((card) => card.classList.remove("is-flipped"));
        return;
      }

      if (type === "show-back") {
        cards.forEach((card) => card.classList.add("is-flipped"));
        return;
      }

      if (type === "shuffle") {
        const shuffled = [...cards];
        for (let i = shuffled.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        shuffled.forEach((card) => grid.appendChild(card));
      }
    });
  });
});
