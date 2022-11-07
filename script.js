const pokelist = document.getElementsByClassName('pokedex-pokelist');

function fetchPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
    .then(response => response.json())
    .then(allPokemon => console.log(allPokemon))
}

fetchPokemon()