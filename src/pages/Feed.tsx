import React, { useState, useEffect } from "react";
import axios from 'axios';
import { View, StyleSheet } from "react-native";
import Card from '../components/Card';


export default function Feed() { 
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        axios
        .get("https://pokedex20201.herokuapp.com/pokemons")
        .then(response => setPokemons(response.data.data))
    }, [])
    
    return (
        <View style={styles.container}>
            {pokemons.map(pokemon => (
                <Card key={pokemon.id} pokemon={pokemon}/>
            ))}                                         
        </View>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        width: "100%",
        flexWrap: "wrap",
        flexDirection: "row",
        justifyContent: "center",
    }
})