const lists__pokemons = document.getElementById('lists__pokemons')
let urlPokemon = 'https://pokeapi.co/api/v2/pokemon?limit=151'
let templateHtml;

const GetPokemons = async (url) => {
    try {
        const response = await fetch(url)
        const results = await response.json();
        console.log(results)
        DataPokemons(results.results)

    } catch (error) {
        console.log(error)
    }
}
GetPokemons(urlPokemon)

const DataPokemons = async (data) => {
    lists__pokemons.innerHTML = '';
    try {
        for (let index of data) {

            const resp = await fetch(index.url)
            const resul = await resp.json();
            console.log(resul)
            console.log(resul.types);

            
            templateHtml=`
            <div class="pokemon__card">
                
            <div class="card__top">
                    <h5 class="id__number">${resul.id}</h5>
                    <h5 class="id__number">HP ${resul.stats[0].base_stat}</h5>
                </div>
                
                <div class="card__image">
                    <img src=${resul.sprites.other.dream_world.front_default} alt=${resul.name}/>
                </div>
                
                <div class="card__name">
                <h2>${resul.name}</h2>
                </div>

                <div class="types">
                    <h3>${resul.types[0].type.name}</h3> 
                    
                </div>

                <div class="stats">
                    <div class="stat1">
                        <h3>${resul.stats[1].base_stat}</h3> 
                        <p>Attack</p>
                    </div>
                    <div class="stat1">
                        <h3>${resul.stats[2].base_stat}</h3> 
                        <p>Defense</p>
                    </div>
                    <div class="stat1">
                        <h3>${resul.stats[5].base_stat}</h3> 
                        <p>Speed</p>
                    </div>
                </div>
            </div>
            `
            lists__pokemons.innerHTML+=templateHtml

        }
        
    } catch (error) {
        console.log(error)
    }
}

let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
      typeColor.style.backgroundColor = color;
    });
  };



