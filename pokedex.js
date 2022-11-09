import * as http from 'http';
// import './pokeapimodule.js';
import Pokedex from 'pokedex-promise-v2';

const P = new Pokedex();

const pokeApiModule = (async () => { // with Async/Await
    try {
        const golduckSpecies = await P.getPokemonSpeciesByName("bulbasaur")
        const frenchName = golduckSpecies.names.filter(pokeAPIName => pokeAPIName.language.name === 'fr')[0].name
        console.log(frenchName)
    } catch (error) {
        throw error
    }
})();

http.createServer(function (req, res) {
  res.write(JSON.stringify(pokeApiModule));
  res.end();
}).listen(8080); 