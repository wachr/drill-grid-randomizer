async function render() {
  return loadData().then((data) => display(data));
}

async function loadData() {
  return fetch("./data.json").then((res) => res.json());
}

async function display(data) {
  const drillSpace = document.getElementById("drill-space");
  Object.entries(data).forEach(([section, content]) => {
    const header = document.createElement("h1");
    header.textContent = section;
    drillSpace.appendChild(header);
    if (Array.isArray(content)) {
      const listItems = content.map((value) => {
        const p = document.createElement("p");
        p.textContent = JSON.stringify(value);
        const li = document.createElement("li");
        li.appendChild(p);
        return li;
      });
      const ul = document.createElement("ul");
      listItems.forEach((li) => ul.appendChild(li));
      drillSpace.appendChild(ul);
    }
  });
}

render();
