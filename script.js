async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-container");

  const commands = {
    cd: changeDirectory,
    help: showHelp,
    clear: clearTerminal,
  };

  projects.forEach(project => {
    const card = `
            <div class = "col-md-12">

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

                <p class="card-text">
                    ${project.description}
                </p>
            </div>

            </article>
        </div>
        `;
    container.innerHTML += card;
  });
}

function getData() {
  const val = document.getElementById("terminalInput");
  val.addEventListener("keydown", parseCommand);
}

function parseCommand(e) {
  const pages = ["index", "contact", "portfolio"];
  const commands = {
    cd: changeDirectory,
    help: showHelp,
    clear: clearTerminal,
  };
  
  if (e.key === "Enter") {
    const input = document.getElementById("terminalInput").value;
    const tokens = input.split(" ");
    const command = tokens[0];
    const arg = tokens[1];
    commands[tokens[0]];
  }
}

getData();
loadProjects();
