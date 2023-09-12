import React, {Component} from 'react';
import './App.css';
import Navbar from './components/navbar';
import Card from './components/card';

// All pizzaImages
import margherita from './img/pizza-margherita.jpg';
import fritta from './img/pizza-fritta.jpg';
import diavola from './img/pizza-diavola.webp';
import crocche from './img/pizza-crocche.jpg';
import salsicciaFriarielli from './img/pizza-salsiccia-friarielli.jpg';
import wurstelPatatine from './img/pizza-wurstel-patatine.jpg';
import bufalina from './img/pizza-bufalina.jpg';
import provolaPepe from './img/pizza-margherita-provola-pepe.jpg'

class App extends Component{

  // Saving elements in an object
  state= {
    cards: [
      {id: 0, pizzaName: 'Margherita', price: 4.99, pizzaImage: margherita, quantity: 0},
      {id: 1, pizzaName: 'Bufalina', price: 6.99, pizzaImage: bufalina, quantity: 0},
      {id: 2, pizzaName: 'Margherita Provola e Pepe', price: 4.99, pizzaImage: provolaPepe, quantity: 0},
      {id: 3, pizzaName: 'Fritta', price: 4.99, pizzaImage: fritta, quantity: 0},
      {id: 4, pizzaName: 'Diavola', price: 4.99, pizzaImage: diavola, quantity: 0},
      {id: 5, pizzaName: 'Crocchè', price: 4.99, pizzaImage: crocche, quantity: 0},
      {id: 6, pizzaName: 'Salsicce e Friarielli', price: 4.99, pizzaImage: salsicciaFriarielli, quantity: 0},
      {id: 7, pizzaName: 'Wurstel e Patatine', price: 4.99, pizzaImage: wurstelPatatine, quantity: 0},
    ]
  }


  // Function for delete a card
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }


  // Function for add quantity of pizzas
  handleIncrement = card => {
    // Copy the original object
    const cards = [...this.state.cards];

    // Take the ID of card and saved in a constant
    const id = cards.indexOf(card);
    cards[id] = {...card};

    // Increment number
    cards[id].quantity++;
    this.setState({cards})
  }


  // Function for decrement quantity of pizzas
  handleDecrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};

    // If counter is > 0, can decrement
    if (cards[id].quantity > 0) {
      cards[id].quantity--;
    }
    this.setState({cards})
  }


  // Function for reset counter
  handleReset = card =>{
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantity = 0;
    this.setState({cards})
  }
  
  handleResetAll = () => {

    // Remap original array
    const updatedCards = this.state.cards.map(card =>{

      // Original array
      const updatedCard = {...card};
      
      // Reset to zero all quantities
      updatedCard.quantity = 0;
      return updatedCard;
    })
  
   
    this.setState({ cards: updatedCards });
  }

// Interface Code
  render(){
    return (
      <>
        <Navbar />
  
        <main>
          <div className='container'>

            {/* Title and buttons */}
            <div className='d-flex justify-content-between'>
              <h1>Cosa desideri ordinare?</h1>

              <div className='buttons d-flex justify-content-center align-items-center'>
                <button onClick={this.handleResetAll} className='btn btn-warning me-2'>Reset</button>

                <button onClick={this.handleShowOrder} className="btn btn-primary w-100">Conferma</button>
              </div>
              
            </div>
            <hr />
            
    
            {/* Cards row */}
            <div className='row'>
              {this.state.cards.map(card =>(

                /* First method
                <Card 
                key={card.id}
                pizzaImage={card.pizzaImage}
                pizzaName={card.pizzaName}
                price={card.price}/>*/

                // Second method (clearer)
                <Card 
                key={card.id}
                onDelete = {this.handleDelete}
                onIncrement = {this.handleIncrement}
                onDecrement = {this.handleDecrement}
                onReset = {this.handleReset}
                card = {card}/>
              ))}


            </div>
          </div>
        </main>
      </>
      
    );
  }
}

export default App;
