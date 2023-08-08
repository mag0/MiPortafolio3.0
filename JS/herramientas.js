let herramientas = [
  "HTML",
  "CSS",
  "JavaScript",
  "Sass",
  "ReactJs",
  "Git",
  "Github",
  "NodeJs",
  "MySql",
  "Bootstrap",
  "Python",
  "Java",
];

let div = document.getElementById("contenedor");

for (let i = 0; i < herramientas.length; i++) {
  const li = document.createElement("li");
  const img = document.createElement("img");
  const p = document.createElement("p");
  img.src = "../IMG/herramientas/" + herramientas[i] + ".png";
  img.alt = herramientas[i];
  p.textContent = herramientas[i];
  li.appendChild(img);
  li.appendChild(p);
  div.appendChild(li);
}
