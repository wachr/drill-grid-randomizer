var drillData;

async function render() {
  document
    .getElementById("button-randomize")
    .addEventListener("click", () => randomize());
  return loadData().then((data) => display(data));
}

async function loadData(url = "./data.json") {
  if (drillData) return Promise.resolve(drillData);
  return fetch(url)
    .then((res) => res.json())
    .then((json) => (drillData ??= json));
}

function display() {
  const drillSpace = document.getElementById("drill-space");
  Promise.resolve(permutation("Striking")).then(
    ([p, table]) => {
      drillSpace.appendChild(p);
      drillSpace.appendChild(table);
    },
  );
  Promise.resolve(permutation("GM Bobby's 7-count Punching Drill")).then(
    ([p, table]) => {
      drillSpace.appendChild(p);
      drillSpace.appendChild(table);
    },
  );
}

function permutation(label) {
  if (!Object.keys(drillData).includes(label))
    throw new Error("Missing data: " + label);
  return renderPermutationTable(label, drillData[label]);
}

function renderPermutationTable(label, data) {
  const p = document.createElement("p");
  p.textContent = "Drill Grid: " + String(label);
  p.setAttribute("hidden", true);
  p.setAttribute("class", "grid-placeholder");
  const table = document.createElement("table");
  const caption = document.createElement("caption");
  caption.textContent = "Drill Grid: " + String(label);
  table.appendChild(caption);
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
      table.appendChild(tr);
    }
  });
  p.addEventListener("click", () => {
    table.removeAttribute("hidden");
    p.setAttribute("hidden", true);
  });
  table.addEventListener("click", () => {
    p.removeAttribute("hidden");
    table.setAttribute("hidden", true);
  });
  return [p, table];
}

function randomize() {
  document
    .getElementById("drill-space")
    .querySelectorAll("tr")
    .forEach((tr) => {
      const tds = Array.from(tr.querySelectorAll("td"));
      const chosen = Math.trunc(Math.random() * tds.length);
      tds.forEach((td, index) =>
        td.setAttribute("class", index === chosen ? "chosen" : undefined),
      );
    });
}

render();
