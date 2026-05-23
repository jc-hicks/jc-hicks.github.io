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
