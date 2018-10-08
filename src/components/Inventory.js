import React from 'react';
import BookView from "./BookView";

class Inventory extends React.Component {


    render() {

        const bookListening = this.props.books.map(book => {
            return <BookView book={book} addToOrder={this.props.addToOrder} removeFromOrder={this.props.removeFromOrder}/>
        });

        return (<div className="inventory col-4" >
                {bookListening}
        </div>
        );
    }
}

export default Inventory;