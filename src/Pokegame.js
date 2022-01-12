import React, {Component} from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component {

    render() {
        const pokemons = this.props.pokemons;
        let poketeam1 = [];
        let poketeam2 = [...pokemons];

        while(poketeam1.length < poketeam2.length) {
            let randIdx = Math.floor(Math.random() * poketeam2.length);
            let randPokemon = poketeam2.splice(randIdx,1)[0];
            poketeam1.push(randPokemon);
        }
        let total_exp1 = 0;
        const pokemons1 = poketeam1;
        pokemons1.map(p => total_exp1+=p.base_experience);
        let total_exp2 = 0;
        const pokemons2 = poketeam2;
        pokemons2.map(p => total_exp2+=p.base_experience);

        return (
            <div>
                <h1>Pokegame!</h1>
                <Pokedex pokemons = {poketeam1} isWinner={total_exp1>total_exp2} total_exp={total_exp1}/>
                <Pokedex pokemons = {poketeam2} isWinner={total_exp1<total_exp2} total_exp={total_exp2}/>
            </div>
        )
    }
}


export default Pokegame;