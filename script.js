async function loadProjects() {
  const response = await fetch("projects.json");
  const projects = await response.json();

  const container = document.getElementById("projects-container");

  projects.forEach(project => {
    const card = `
      <div class="col-md-12">
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

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function changeDirectory(arg) {
  appendTerminalLine(`Opening  ${arg}`);
  await delay(200);
  window.open("http://127.0.0.1:5500/" + arg + ".html");
}

function getData() {
  const val = document.getElementById("terminal-input");

  val.addEventListener("keydown", parseCommand);
}

function showHelp() {
  appendTerminalLine("Available commands:");
  appendTerminalLine("cd <page>");
  appendTerminalLine("help");
  appendTerminalLine("clear");
}

function clearTerminal() {
  document.getElementById("terminal-output").innerHTML = "";
}

const commands = {
  cd: changeDirectory,
  help: showHelp,
  clear: clearTerminal,
};

function parseCommand(e) {
  const pages = ["index", "contact", "portfolio"];

  if (e.key === "Enter") {
    const inputElement = document.getElementById("terminal-input");

    const input = inputElement.value.trim();

    if (!input) return;

    appendTerminalLine(`jameshicks@portfolio > ${input}`);

    const tokens = input.split(/\s+/);

    const command = tokens[0];
    const arg = tokens[1];

    if (!commands[command]) {
      appendTerminalLine("Command not found.");
      inputElement.value = "";
      return;
    }

    if (command === "cd") {

      if (!pages.includes(arg)) {
        appendTerminalLine("Invalid page.");
        inputElement.value = "";
        return;
      }

      commands[command](arg);
      inputElement.value = "";
      return;
    }

    commands[command]();
    inputElement.value = "";
  }
}

function appendTerminalLine(text) {
  const output = document.getElementById("terminal-output");
  const line = document.createElement("div");
  line.classList.add("terminal-line");
  line.textContent = text;
  output.appendChild(line);
  output.scrollTop = output.scrollHeight;
}

getData();
loadProjects();
