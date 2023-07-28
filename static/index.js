async function render() {
  return loadData().then((data) => display(data));
}

async function loadData(url = "./data.json") {
  return fetch(url).then((res) => res.json());
}

async function display(data) {
  const drillSpace = document.getElementById("drill-space");
  Object.entries(data).forEach(([section, content]) => {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.scope = "row";
    th.textContent = section;
    tr.appendChild(th);
    if (Array.isArray(content)) {
      content.forEach((value) => {
        const td = document.createElement("td");
        td.textContent =
          typeof value === "string" ? value : JSON.stringify(value);
        tr.appendChild(td);
      });
      drillSpace.appendChild(tr);
    }
  });
}

render();
