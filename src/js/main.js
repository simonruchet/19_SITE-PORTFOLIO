const scrollBtn = document.getElementById("scroll-button");

if (scrollBtn) {
  scrollBtn.addEventListener("click", () => {
    // On cible la première section après le header
    const firstProject = document.querySelector(".experience");

    if (firstProject) {
      firstProject.scrollIntoView({
        behavior: "smooth",
        block: "start", // Aligne le haut de la section avec le haut de l'écran
      });
    }
  });
}
