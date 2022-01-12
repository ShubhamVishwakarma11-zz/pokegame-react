import React, {Component} from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";


class Pokedex extends Component {

    render() {

        const pokemons = this.props.pokemons;
        const isWinner = this.props.isWinner;

        return (
            <div className="Pokedex">
                {isWinner===true 
                ? <h1 className="winner-team">Winner Team</h1>
                : <h1 className="loser-team">Loser Team</h1>
                }
                <h2> Totat Experience: {this.props.total_exp}</h2>
                
				<div className="Pokedex-cards">
					{pokemons.map(p => 
						<Pokecard key={p.id} id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                    )}
				</div>
			</div>
        );
    }
}

export default Pokedex;