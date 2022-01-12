import React, {Component} from 'react';
import "./Pokecard.css";
// const IMG_API = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";
const IMG_API = " https://assets.pokemon.com/assets/cms2/img/pokedex/detail/";

let padToThree = (number) => (number<=999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {

    render() {
        const IMG_SRC = `${IMG_API}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard"> 
                <h1 className="Pokecard-heading"> {this.props.name}</h1>
                <img className="Pokecard-img" src={IMG_SRC} alt = {this.props.name}/>
                <p className="Pokecard-data">  Type: {this.props.type} </p>
                <p className="Pokecard-data"> EXP: {this.props.exp} </p>
            </div>
        )
    }
}

export default Pokecard;