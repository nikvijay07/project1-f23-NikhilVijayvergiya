let index = 1;

let BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;

let data;

let infoButtonClicked = true;

let typeColor = {};
typeColor["normal"] = "A8A77A";
typeColor["fire"] = "EE8130";
typeColor["water"] = "6390F0";
typeColor["electric"] = "F7D02C";
typeColor["grass"] = "7AC74C";
typeColor["ice"] = "96D9D6";
typeColor["fighting"] = "C22E28";
typeColor["poison"] = "A33EA1";
typeColor["ground"] = "E2BF65";
typeColor["flying"] = "A98FF3";
typeColor["psychic"] = "F95587";
typeColor["bug"] = "A6B91A";
typeColor["rock"] = "B6A136";
typeColor["ghost"] = "735797";
typeColor["dragon"] = "6F35FC";
typeColor["dark"] = "705746";
typeColor["steel"] = "B7B7CE";
typeColor["fairy"] = "D685AD";


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

    if (infoButtonClicked) {
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
        <li> height: ${height1}m</li>
        <li> weight: ${weight1}kg</li>
        <li> hp: ${hp1}</li>
        <li> attack: ${attack1}</li>
        <li> defense: ${defense1}</li>
        <li> special-attack: ${specialAttack1}</li>
        <li> special-defense: ${specialDefense1}</li>
        <li> speed1: ${speed1}</li>
        </ul>
        `
        statsDiv.innerHTML = statsHTML;
        document.getElementsByClassName("Info")[0].style.backgroundColor = 'lightgreen';
        document.getElementsByClassName("Info")[0].innerHTML = 'Info';

    } else {
        const infoText = document.getElementsByClassName("infoText")[0];
        infoText.textContent = "Moves";

        const moves = data.moves.map(moveData => moveData.move.name);
        const statsDiv = document.getElementsByClassName("statsList1")[0];
        
        var statsHTML = `<ul class = "statsList">`; 

        let length = moves.length

        if (length >= 13) {
            length = 13;
        }
        
        for (var i = 0; i < length; i++) {
            console.log(moves[i]);
            statsHTML += `\n<li> ${moves[i]} </li>`;
        }
        statsHTML += `\n</ul>`;

        statsDiv.innerHTML = statsHTML;
        document.getElementsByClassName("Moves")[0].innerHTML = '<style = "this.style.backgroundColor = \'lightgreen\';"> Moves';
        document.getElementsByClassName("Moves")[0].innerHTML = 'Moves';

    }

    
    const typeMap = data.types.map(typeData => typeData.type.name);
    var typeHTML = `<ul class = "typeList">`;

    for (var i = 0; i < typeMap.length; i++) {
        let c = typeColor[typeMap[i]];
        typeHTML += `\n<li style="background-color: #${c}; 
        width: 80px; height: 25px; border-radius: 5px; font-family: Inter, sans-serif;
        text-align: center; font-weight: 200; line-height: 25px"> ${typeMap[i]} </li>`
    }
    
    typeHTML += `\n <ul>`;
    
    document.getElementsByClassName("typesHeader")[0].innerHTML = typeHTML;

}

const infoButton = document.getElementsByClassName("Info")[0];
const movesButton = document.getElementsByClassName("Moves")[0];

infoButton.addEventListener("click", () => {
    infoButtonClicked = true;

    const infoText = document.getElementsByClassName("infoText")[0];
    infoText.textContent = "Info";

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
    <li> height: ${height1}m</li>
    <li> weight: ${weight1}kg</li>
    <li> hp: ${hp1}</li>
    <li> attack: ${attack1}</li>
    <li> defense: ${defense1}</li>
    <li> special-attack: ${specialAttack1}</li>
    <li> special-defense: ${specialDefense1}</li>
    <li> speed1: ${speed1}</li>
    </ul>
    `
    statsDiv.innerHTML = statsHTML;
    document.getElementsByClassName("Info")[0].style.backgroundColor = 'lightgreen';
    document.getElementsByClassName("Info")[0].innerHTML = 'Info';
    document.getElementsByClassName("Moves")[0].style.backgroundColor = '';



});

movesButton.addEventListener("click", () => {
    infoButtonClicked = false;

    const infoText = document.getElementsByClassName("infoText")[0];
    infoText.textContent = "Moves";

    const moves = data.moves.map(moveData => moveData.move.name);
    const statsDiv = document.getElementsByClassName("statsList1")[0];
    
    var statsHTML = `<ul class = "statsList">`; 

    let length = moves.length

    if (length >= 13) {
        length = 13;
    }
    
    for (var i = 0; i < length; i++) {
        console.log(moves[i]);
        statsHTML += `\n<li> ${moves[i]} </li>`;
    }
    statsHTML += `\n</ul>`;

    statsDiv.innerHTML = statsHTML;
    document.getElementsByClassName("Moves")[0].style.backgroundColor = 'lightgreen';
    document.getElementsByClassName("Moves")[0].innerHTML = 'Moves';
    document.getElementsByClassName("Info")[0].style.backgroundColor = '';



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
        BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;
        fetchData();
    }
});

rightButton.addEventListener("click", () => {
    if (index === 1008) {
        index = 0;
    }
    index += 1;
    BASE_URL = `https://pokeapi.co/api/v2/pokemon/${index}/`;
    if (document.getElementsByClassName("warning0")[0] != null) {
        document.getElementsByClassName("warning0")[0].remove();
    }
    fetchData();
});


fetchData();