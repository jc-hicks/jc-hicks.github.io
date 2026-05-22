async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-container");

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

async function changeDirectory(arg) {
  window.open("http://127.0.0.1:5500/" + arg + ".html");
}

function getData() {
  const val = document.getElementById("terminalInput");
  val.addEventListener("keydown", parseCommand);
}

function showHelp() {
  console.log("Dummy help text");
}

function clearTerminal() {
  console.log("invoked clear");
}

const commands = {
  cd: changeDirectory,
  help: showHelp,
  clear: clearTerminal,
};

function parseCommand(e) {
  const pages = ["index", "contact", "portfolio"];

  if (e.key === "Enter") {
    const input = document.getElementById("terminalInput").value.trim();
    const tokens = input.split(/\s+/);

    const command = tokens[0];
    const arg = tokens[1];

    if (!commands[command]) {
      console.log("command not found");
      return;
    }
    
    if (command === "cd") {
      if (pages.includes(arg)) {
        commands[command](arg);
      } else {
        console.log("Invalid page.")
      }
    }
    commands[command]();
  }
}

getData();
loadProjects();
