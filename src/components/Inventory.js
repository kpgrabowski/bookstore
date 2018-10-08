import React from 'react';
import BookView from "./BookView";

class Inventory extends React.Component {


    render() {

        const bookListening = this.props.books.map(book => {
            return <BookView book={book}/>
        });

        return (<div className="inventory col-4" >
                {bookListening}
        </div>
        );
    }
}

export default Inventory;