const pokelist = document.getElementsByClassName('pokedex-pokelist');
const pokenav = document.getElementById('pokenav')
const bulbasaurPic = document.getElementById('bulbasaur')

function fetchPokemon(idx) {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=905')
    .then(response => response.json())
    .then(allPokemon => console.log(allPokemon['results'][idx-1]))
}

pokenav.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        fetchPokemon(pokenav.value)
        pokenav.value = '';
    }
})

bulbasaurPic.addEventListener('click', () => {
    fetchPokemon(1);
})