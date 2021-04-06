import App from "./App";


//random number generator
export const rando = (min, max) => {
  return Math.floor(Math.random() * max) + min
}

//get a pokemon
export const pokeFetch = (resource, options) => {

  const baseRoute = 'https://pokeapi.co/api/v2'

  return fetch(`${baseRoute}/${resource}/${options}`)
  .then(function(response){
    //smart to put error handling here just in case there is no json response
    return response.json()
  })
  .then((data) => {
    return data
  })
  .catch((err) => {
    //should do more here
     console.log(`Error fetching: ${err}`)
  });

}


//unit boolean
let isMetric = true

//change units
export function changeUnits() {

  const pokemon = App.state.pokemon

  if(isMetric == true) {

   App.setState({
     pokemonHeight: pokemon.height / 3.048 + ' Feet',
     pokemonWeight: pokemon.weight / 4.356 + ' lbs',
   })

   isMetric = false

  }

  if (isMetric == false) {

   App.setState({
     pokemonHeight: pokemon.height / 10 + ' Meters',
     pokemonWeight: pokemon.weight / 10 + ' Kilograms',
   })

   isMetric = true

  }

}

