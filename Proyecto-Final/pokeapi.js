const container = document.getElementById("container");
const search$$ = document.querySelector(".search__input");
const pokemonsNumber = 151;

const typeColors = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#eaeda1",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
};

const mainTypes = Object.keys(typeColors);

const getPokemonsFromApi = async () => {
  for (let id = 1; id <= pokemonsNumber; id++) {
    let pokemon = await getPokemon(id);
    createPokemonCard(pokemon);
  }
};

const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  return await res.json();
};

const renderStats = (pokemon) => {
  return `
    <div class="stats">
        <div class="stat1">
            <h3>${pokemon.stats[1].base_stat}</h3> 
            <p>Attack</p>
        </div>
        <div class="stat1">
            <h3>${pokemon.stats[2].base_stat}</h3> 
            <p>Defense</p>
        </div>
        <div class="stat1">
            <h3>${pokemon.stats[5].base_stat}</h3> 
            <p>Speed</p>
        </div>
    </div>
    `;
};

const renderPokemon = (pokemon, hasTwoTypes) => {
  const threeDigitsId = pokemon.id.toString().padStart(3, "0");
  const pokemonHealth = pokemon.stats[0].base_stat;

  const renderTypes = () => {
    if (hasTwoTypes) {
      return `
              <div class="types">
                  <h3 class="type-name">${pokemon.types[0].type.name}</h3>
                  <h3 class="type-name">${pokemon.types[1].type.name}</h3>
              </div>
              `;
    } else {
      return `<h3 class="type-name">${pokemon.types[0].type.name}</h3>`;
    }
  };

  return `
        <div class="card-top">
            <h5 class="number">#${threeDigitsId}</h5>
            <h5 class="health">HP ${pokemonHealth}</h5>
        </div>
        <div class="img-container">
        <img src=${pokemon.sprites.front_default} alt=${pokemon.name}/>
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            ${renderTypes()}
        </div>
        ${renderStats(pokemon)}
        `;
};

function createPokemonCard(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemon");

  const pokemonTypes = pokemon.types.map((type) => type.type.name);
  const type = pokemonTypes.length ? pokemonTypes[0] : "normal";
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const color = typeColors[type] || typeColors.normal;

  //pokemonCard.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;

  // Condicional para comprovar si hay uno o dos tipos de pokemon

  const hasTwoTypes = pokemonTypes.length === 2;

  pokemonCard.innerHTML = renderPokemon(pokemon, hasTwoTypes);

  container.appendChild(pokemonCard);

  pokemonCard.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
  pokemonCard.style.border = `solid 5px ${color}`;

  pokemonCard.querySelectorAll(".type-name")
    .forEach((type, index) => {
        type.style.backgroundColor = typeColors[pokemonTypes[index]];
    })
}

const init = () => {
  getPokemonsFromApi();

  search$$.addEventListener("input", (ev) => {
    // TODO: implement search engine;
    console.log(ev.target.value);
  });
};

window.onload = init;
