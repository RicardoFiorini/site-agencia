document.addEventListener("DOMContentLoaded", () => {
  // Configura o IntersectionObserver para animações de scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Adiciona a classe 'visible-fade' quando o elemento entra na tela
        entry.target.classList.add("visible-fade");
        observer.unobserve(entry.target); // Para de observar após animar
      }
    });
  }, {
    threshold: 0.1 // Ativa quando 10% do elemento está visível
  });

  // Seleciona todos os elementos que devem ser animados
  const elementsToAnimate = document.querySelectorAll(".hidden-fade");
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
});