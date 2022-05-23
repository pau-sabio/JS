const poke_container = document.getElementById('poke_container');
const pokemons_number = 151;
const search$$ = document.querySelector(".input");
const colors = {
	fire: '#FDDFDF',
	grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
};

const main_types = Object.keys(colors);


const fetchPokemons = async () => {
	for (let i = 1; i <= pokemons_number; i++) {
		await getPokemon(i);
	}
    
};

const getPokemon = async id => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const res = await fetch(url);
	const pokemon = await res.json();
    const types = pokemon;
    

    search$$.addEventListener("input", () => search(pokemon));


	createPokemonCard(pokemon);


};




function createPokemonCard(pokemon) {
	const pokemonEl = document.createElement('div');
	pokemonEl.classList.add('pokemon');



	const poke_types = pokemon.types.map(type => type.type.name);
	const type = main_types.find(type => poke_types.indexOf(type) > -1);
	const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
	const color = colors[type];
	
	pokemonEl.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`; 
    
    // Condicional para comprovar si hay uno o dos tipos de pokemon

    if (pokemon.types[1]){
        const pokeInnerHTML = `
        <div class="card-top">
            <h5 class="number">#${pokemon.id
                .toString()
                .padStart(3, '0')}</h5>
            <h5 class="health">HP ${pokemon.stats[0].base_stat}</h5>
        </div>
        <div class="img-container">
        <img src=${pokemon.sprites.front_default} alt=${pokemon.name}/>
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <div class="types">
                <h3 class="type-name">${pokemon.types[0].type.name}</h3>
                <h3 class="type-name">${pokemon.types[1].type.name}</h3>
            </div>
        </div>
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

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
    
    } else {
        const pokeInnerHTML = `
        <div class="card-top">
            <h5 class="number">#${pokemon.id
                .toString()
                .padStart(3, '0')}</h5>
            <h5 class="health">HP ${pokemon.stats[0].base_stat}</h5>
        </div>
        <div class="img-container">
        <img src=${pokemon.sprites.front_default} alt=${pokemon.name}/>
        </div>
        <div class="info">
            <h3 class="name">${name}</h3>
            <h3 class="type-name">${pokemon.types[0].type.name}</h3>
        </div>
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

	pokemonEl.innerHTML = pokeInnerHTML;

	poke_container.appendChild(pokemonEl);
    }

}




fetchPokemons();