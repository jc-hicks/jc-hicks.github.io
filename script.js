async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-container");

  projects.forEach(project => {
    const card = `
            <div class = "col-md-6 col-lg-4 filter-item">

            <article class="card shadow-sm h-100">
            
            <div class="card-body">

                <!-- Project Name -->
                <h2 class="card-title h5">
                    ${project.title}
                </h2>
                
                <!-- Github Link -->
                <a 
                href="${project.github}" 
                target="_blank" 
                class="btn btn-dark btn-sm mb-3"
                >
                View GitHub
                </a>

                <p class="cart-text">
                    ${project.description}
                </p>
            </div>

            </article>
        </div>
        `;
    container.innerHTML += card;
  });
}
loadProjects();
