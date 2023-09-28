let index = 1;

let BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;

let data;


async function fetchData() {
    const response = await fetch(BASE_URL);
    data = await response.json();
    const imageURL = data.sprites.front_default;

    const imageDiv = document.getElementsByClassName("imageBackground")[0];
    const imageHTML = `
    <img class="pokeImage" src=${imageURL} alt = "pokemonFront">
    `;
    imageDiv.innerHTML = imageHTML;

    const pokeName = data.name;
    const nameDiv = document.getElementsByClassName("pokemonLayout")[0];
    const nameHTML = 
    `<p class="pokemonName"> ${pokeName}  </p>
    `
    nameDiv.innerHTML = nameHTML;

    const height1 = data.height/10;
    const weight1 = data.weight/10;
    const hp1 = data.stats[0].base_stat/10;
    const attack1 = data.stats[1].base_stat/10;
    const defense1 = data.stats[2].base_stat/10;
    const specialAttack1 = data.stats[3].base_stat/10;
    const specialDefense1 = data.stats[4].base_stat/10;
    const speed1 = data.stats[5].base_stat/10;

    const statsDiv = document.getElementsByClassName("statsList1")[0];
    
    
    const statsHTML =
    `<ul class = "statsList">
    <li> height: ${height1}</li>
    <li> weight: ${weight1}</li>
    <li> hp: ${hp1}</li>
    <li> attack: ${attack1}</li>
    <li> defense: ${defense1}</li>
    <li> special-attack: ${specialAttack1}</li>
    <li> special-defense: ${specialDefense1}</li>
    <li> speed1: ${speed1}</li>
    </ul>
    `
    statsDiv.innerHTML = statsHTML;
    


}

const infoButton = document.getElementsByClassName("Info")[0];
const movesButton = document.getElementsByClassName("Moves")[0];

infoButton.addEventListener("click", () => {
    const height1 = data.height/10;
    const weight1 = data.weight/10;
    const hp1 = data.stats[0].base_stat/10;
    const attack1 = data.stats[1].base_stat/10;
    const defense1 = data.stats[2].base_stat/10;
    const specialAttack1 = data.stats[3].base_stat/10;
    const specialDefense1 = data.stats[4].base_stat/10;
    const speed1 = data.stats[5].base_stat/10;

    const statsDiv = document.getElementsByClassName("statsList1")[0];
    
    
    const statsHTML =
    `<ul class = "statsList">
    <li> height: ${height1}</li>
    <li> weight: ${weight1}</li>
    <li> hp: ${hp1}</li>
    <li> attack: ${attack1}</li>
    <li> defense: ${defense1}</li>
    <li> special-attack: ${specialAttack1}</li>
    <li> special-defense: ${specialDefense1}</li>
    <li> speed1: ${speed1}</li>
    </ul>
    `
    statsDiv.innerHTML = statsHTML;
});

movesButton.addEventListener("click", () => {
    const moves = data.moves.map(moveData => moveData.move.name);

    const statsDiv = document.getElementsByClassName("statsList1")[0];
    
    var statsHTML = `<ul class = "statsList">`; 
    
    for (var i = 0; i < moves.length; i++) {
        console.log(moves[i]);
        statsHTML += `\n<li> ${moves[i]} </li>`;
    }
    statsHTML += `\n</ul>`;

    statsDiv.innerHTML = statsHTML;

});

const leftButton = document.getElementsByClassName("left")[0];
const rightButton = document.getElementsByClassName("right")[0];

leftButton.addEventListener("click", () => {
    if (index === 1) {
        const warningDiv = document.getElementsByClassName("warning")[0];
        const warningHTML = `<p class = "warning0"> Cannot go left </p>`;
        warningDiv.innerHTML = warningHTML;
    } else {
        index-=1;
        fetchData();
    }
});

rightButton.addEventListener("click", () => {
    index+=1;
    fetchData();
});


fetchData();