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
                    </div>

                    {/* Counter div */}
                    <div className="mb-2">
                        <button onClick={()=>this.props.onIncrement(this.props.card)} className="btn btn-outline-success">
                            <i className="fa-solid fa-plus"></i>
                        </button>

                        <span className="badge text-bg-light">( {this.props.card.quantity} )</span>

                        <button onClick={()=>this.props.onDecrement(this.props.card)} className="btn btn-minus btn-outline-danger ">
                            <i className="fa-solid fa-minus"></i>
                        </button>
                    </div>

                    <div>
                        <button onClick={()=>this.props.onDelete(this.props.card.id)} className="btn w-100 btn-danger">Elimina</button>
                        <button onClick={()=>this.props.onReset(this.props.card)} className="btn btn-warning w-100">Annulla</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card;