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
export function changeUnits(context) {

  // at this point, we have no idea what App is, so we should just pass the context

  // there are probably better ways to do this, and we will get into them during class
  const pokemon = context.state.pokemon;
  console.log('isMetric: ', isMetric);

  if(isMetric == true) {

    context.setState({
     pokemonHeight: pokemon.height / 3.048 + ' Feet',
     pokemonWeight: pokemon.weight / 4.356 + ' lbs',
   })


  }

  if (isMetric == false) {

    context.setState({
     pokemonHeight: pokemon.height / 10 + ' Meters',
     pokemonWeight: pokemon.weight / 10 + ' Kilograms',
   })


  }

  // this will toggle the value of isMetric
  isMetric = (isMetric) ? false : true;

}

