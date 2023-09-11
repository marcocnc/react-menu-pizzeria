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


  // Function to delete a card
  handleDelete = cardId => {
    const cards = this.state.cards.filter(card => card.id !== cardId);
    this.setState({cards});
  }

  // Function to add quantity of pizzas
  handleIncrement = card => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = {...card};
    cards[id].quantity++;
    this.setState({cards})
  }



  render(){
    return (
      <>
        <Navbar />
  
        <main>
          <div className='container'>
            <h1>Cosa desideri ordinare?</h1>
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
