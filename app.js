async function render() {
  document
    .getElementById("button-randomize")
    .addEventListener("click", () => randomize());
  return loadData().then((data) => display(data));
}

async function loadData(url = "./data.json") {
  return fetch(url).then((res) => res.json());
}

function display(data) {
  const drillSpace = document.getElementById("drill-space");
  Object.entries(data).forEach(([section, content]) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = section;
    tr.appendChild(th);
    if (Array.isArray(content)) {
      const chosen = Math.trunc(Math.random() * content.length);
      content.forEach((value, index) => {
        const td = document.createElement("td");
        td.textContent =
          typeof value === "string" ? value : JSON.stringify(value);
        if (index === chosen) td.setAttribute("class", "chosen");
        tr.appendChild(td);
      });
      drillSpace.appendChild(tr);
    }
  });
}

function randomize() {
  document
    .getElementById("drill-space")
    .querySelectorAll("tr")
    .forEach((tr) => {
      const tds = Array.from(tr.querySelectorAll("td"));
      const chosen = Math.trunc(Math.random() * tds.length);
      tds.forEach((td, index) =>
        td.setAttribute("class", index === chosen ? "chosen" : undefined)
      );
    });
}

render();
