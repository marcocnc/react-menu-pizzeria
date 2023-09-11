import React, {Component} from 'react';


class Card extends Component{
    render(){
        return (
            <div className="col">
                <div className="card" style={{width: '18rem', textAlign: 'center', marginBottom: '2rem'}}>
                    <img src={this.props.card.pizzaImage} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title"> {this.props.card.pizzaName}</h5>
                        <p className="card-text">{this.props.card.price}€</p>
                        <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn btn-outline-danger">Elimina</button>
                        
                    </div>
                    <div>
                        <button onClick={()=>this.props.onIncrement(this.props.card)} className="btn btn-primary w-50">Aggiungi <span className="badge badge-light">( {this.props.card.quantity} )</span></button>
                        
                        <button onClick={()=>this.props.onReset(this.props.card)} className="btn btn-warning w-50">Annulla</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;