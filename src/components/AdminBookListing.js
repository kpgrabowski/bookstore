import React from 'react';

class AdminBookListing extends React.Component {

    constructor() {
        super();
          }


    render() {

            let list;

            if(this.props.books) {
                list = <ol>{this.props.books.map((book) => <div>
                    <li key={book.name}>{book.name}<br/>{book.author}</li>
                    <button key={book.id}
                            className="deleteBook"
                            onClick={(event) =>this.props.removeFromOrder(this.props.book.name)}
                            >
                        Delete Book
                    </button>
                    </div>
                )}</ol>
            }else{
                list = <div> No books in state</div>
        }
        return (
            <div>
                {list}
            </div>
        )

    }


}

export default AdminBookListing;