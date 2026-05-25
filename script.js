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

  appendTerminalLine("cd <page>: Navigate to a page in a new tab.");

  appendTerminalLine("help:  Display this help menu.");

  appendTerminalLine("clear: Clear the terminal output.");

  appendTerminalLine("ls: List available site directories.");

  appendTerminalLine("whoami: Display information about me!");
}

function clearTerminal() {
  document.getElementById("terminal-output").innerHTML = "";
}

function listDirectory() {
  appendTerminalLine("portfolio   contact   index");
}

const commands = {
  cd: changeDirectory,
  help: showHelp,
  clear: clearTerminal,
  whoami: loadWhoAmI,
  ls: listDirectory,
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
      <div class="whoami-panel">
            <div class="whoami-title">
            <h2 class="card-title h5">
              Hi! My name is James Hicks!
            </h2>
            </div>

            <p class="whoami-text">
            I am a HRIS Analyst at Point32Health, currently pursuing a Master's in Computer Science at Northeastern University. I spent a few years working in HRIS/HRIT administering systems, testing integrations, and sitting in a lot of meetings between managers or HR Partners with a HCM software need, and the analysts who built the configuration to meet that need. 
            Eventually I decided I'd rather be on the engineering side, so I enrolled in Northeastern's MSCS program and started learning Software Engineering from scratch. 
            While not traditional, my background is still very beneficial. Through my experiences in HRIS I learned to develop and test large systems, and I know how to communicate across technical and non-technical teams to effectively manage stakeholder expectations.
            
            I have a strong interest in low-level systems, edge ai, and machine learning.
            </p>

            <div class="personal-photo">
            <img src="assets/images/Profile pic.jpeg" alt="A photo of me! James Hicks!">
            </div>

          </div>
        </article>
      </div>
    `;

  container.innerHTML = card;
}
