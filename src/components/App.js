import React from "react";
import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import '../index.css';


class App extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            order: [],
        }
    }

    addNewBook = (book) => {
        let newBooks = [...this.state.books];
        newBooks.push(book);

        this.setState ({
            books: newBooks,
        })
    };

    addToOrder = (book) => {
        this.setState({
            order: [...this.state.order, book]
        })

};

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter(book => title!==book.name)
        })
};

    render() {
        return (<div className="app container">
                <Header/>
                <div className="row">
                    <Order order={this.state.order} removeFromOrder={this.removeFromOrder}/>
                    <Inventory books={this.state.books} addToOrder={this.addToOrder}/>
                    <footer className="footer">Create by K. Grabowski</footer>
                </div>
            </div>
        )
    }


}

export default App;