const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

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
  whoami: loadWhoAmI
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

async function loadWhoAmI() {
  const container = document.getElementById("who-am-i");

  const card = `
      <div class="col-md-12">
        <article class="card shadow-sm h-100">
          <div class="card-body">

            <!-- Project Name -->
            <h2 class="card-title h5">
              Hi! My name is James Hicks!
            </h2>

            <p class="card-text">
            I am a HRIS Analyst at Point32Health, currently pursuing a Master's in Computer Science at Northeastern University. I spent a few years working in HR tech — administering systems, testing integrations, and sitting in a lot of meetings between people who knew what they wanted and the analysts who had to build it. 
            Eventually I decided I'd rather be on the engineering side, so I enrolled in Northeastern's MSCS program and started from scratch. 
            That background doesn't hurt though. I know what it looks like when software fails in production, and I know how to communicate across technical and non-technical teams, and how to effectively manage stakeholder expectations.
            I have a 
            </p>

            <div class="d-flex align-items-center mb-3">
            <img src="assets/images/Profile pic.jpeg" alt="A photo of me! James Hicks!">
            </div>

          </div>
        </article>
      </div>
    `;

  container.innerHTML = card;
}
