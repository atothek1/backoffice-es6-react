export function getRoot() {
  let node = document.getElementById("root");
  if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", "root");
    document.body.appendChild(node);
  }
  return node;
}

export function getPortal(name) {
  let node = document.getElementById(name);
  if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", name);
    document.body.appendChild(node);
  }
  return node;
}
