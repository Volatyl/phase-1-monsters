window.addEventListener("DOMContentLoaded", () => {
  //   displayMonsters();
});

//Function to display monsters
function displayMonsters() {
  fetch("http://localhost:3000/monsters/")
    .then((res) => res.json())
    .then((data) => {})
    .catch((error) => console.error(error));
}

//Function to add monster
