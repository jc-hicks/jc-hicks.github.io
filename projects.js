async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-container");

  projects.forEach((project, index) => {
    const githubButton = project.github
      ? `
        <a
          href="${project.github}"
          target="_blank"
          rel="noopener noreferrer"
          class="project-link"
        >
         <i class="bi bi-github"></i>
      GitHub
    </a>
      `
      : "";

    const card = `
      <div
        class="col-xl-4 col-lg-6"
        style="animation-delay: ${index * 0.15}s"
      >
        <article class="project-card h-100">

          <h2 class="project-title">
            ${project.title}
          </h2>

          ${githubButton}

          <p class="project-description">
            ${project.description}
          </p>

          <img
            class="project-img"
            src="${project.img}"
            alt="${project.title}"
          >

        </article>
      </div>
    `;

    container.innerHTML += card;
  });
}

loadProjects();
