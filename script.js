const pokelist = document.getElementsByClassName('pokedex-pokelist');
const pokenav = document.getElementById('pokenav')

function fetchPokemon(idx) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
    .then(response => response.json())
    .then(allPokemon => console.log(allPokemon['results'][idx-1]['name']))
}

pokenav.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchPokemon(pokenav.value)
        pokenav.value = '';
    }
})
