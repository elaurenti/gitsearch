let p = document.querySelector("p");
let input = document.querySelector("input");

const users = [
  { name: "Rodolfo", link: "https://github.com/rodolfomori"},
  { name: "Evellyn", link: "https://github.com/elaurenti"},
  { name: "Christian", link: "https://github.com/ChristianSouza12" },
  { name: "Guilherme", link: "https://github.com/elaurenti" },
  { name: "Jessica", link: "https://github.com/elaurenti" }, 
];

function search() {
  for (let i = 0; i < users.length; i++) {
    if (input.value.toLowerCase() == users[i].name.toLowerCase()) {
      p.innerHTML = `Nome: ${users[i].name} <a href="${users[i].link}" target="_blank">${users[i].link}</a>`;
      break;
    } else {
      p.innerHTML = "Usuário não encontrado";
    }
  }
}
