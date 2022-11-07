const pokelist = document.getElementsByClassName('pokedex-pokelist');


function fetchPokemon(idx) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
    .then(response => response.json())
    .then(allPokemon => console.log(allPokemon['results'][idx]['name']))
}

fetchPokemon(32)