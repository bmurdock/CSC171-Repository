import React, { Component as RC } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import { rando, pokeFetch, changeUnits } from './utility.js'

//maximum ID of pokemon
const maxPoke = 898

export default class App extends RC {
  constructor() {

    super()

    this.state= {
      pokemonName: '',
      pokemonID: '',
      pokemonImage: {uri: ''},
      pokemonHeight: '',
      pokemonWeight: '',
      pokemonType1: '',
      pokemonType2: '',
    }

  }
  
  async componentDidMount() {

    //get a pokemon - this uses pokemon as the search type and takes 1 out of 898 possible pokemon
    const pokemon = await pokeFetch('pokemon', rando(1, maxPoke))

    //log it
    console.log('pokemon: ', pokemon)

    //set states to whatever the name of the pokeFetch returned
    this.setState({
      pokemonName: pokemon.name,
      pokemonID: pokemon.id,
      pokemonImage: {uri: pokemon.sprites.front_default},
      pokemonHeight: pokemon.height / 10 + ' Meters',
      pokemonWeight: pokemon.weight / 10 + ' Kilograms',

      //pokemon instance (for unit button)
      pokemon: pokemon

    })

    //set single type
    if (pokemon.types.length == 1) {

      this.setState({
        pokemonType1: pokemon.types[0].type.name,
        pokemonType2: null,
      })

    }
    
    //set dual type
    if (pokemon.types.length == 2) {

      this.setState({
        pokemonType1: pokemon.types[0].type.name,
        pokemonType2: ' / ' + pokemon.types[1].type.name,
      })

    }

  }




  




  render() {
    return (
      <View style={styles.container}>
  
        {/*Picture*/}
        <Image style={pokemonStyles.pokemonImage} source={this.state.pokemonImage}/>

        {/*Name/ID*/}
        <Text style={pokemonStyles.statText}>{this.state.pokemonName} (Pokedex ID: {this.state.pokemonID})</Text>
        
        {/*Height/Weight*/}
        <Text style={pokemonStyles.statText}>{this.state.pokemonHeight} / {this.state.pokemonWeight}</Text>

        {/*Type(s)*/}
        <Text style={pokemonStyles.statText}>{this.state.pokemonType1}{this.state.pokemonType2} </Text>

        {/* Change Units NONFUNCTIONAL */}
        <Button title='Change Units' onPress={changeUnits}/>
      
      </View>
    )
  }
}



const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const pokemonStyles = StyleSheet.create({

  pokemonImage: {
    resizeMode: 'contain',
    width: 200,
    height: 200,
  },

  statText: {
    padding: 7.5,
  },
  
})