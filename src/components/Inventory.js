import React from 'react';
import BookView from "./BookView";
import {fbase} from "../fbase";

class Inventory extends React.Component {

constructor() {
    super();
    this.state = {

    }
}

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }


    componentWillUnmount(){
        fbase.removeBinding(this.ref);
    }


    render() {

        let bookListening = <h4> No books on stock</h4>

        if(Array.isArray(this.state.books)) {
            bookListening = this.state.books.map(book => {
                return <BookView key={book.name} book={book} addToOrder={this.props.addToOrder}/>
            });
        }

        return (
            <div className="inventory col-6">
                <h2> BookStore Inventory : </h2>
                {bookListening}
        </div>
        );
    }
}

export default Inventory;