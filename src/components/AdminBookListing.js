import React from 'react';
import AdminBookView from "./AdminBookView";

class AdminBookListing extends React.Component {

    constructor() {
        super();
          }




    render() {

            let list = <div> No books in state</div>

            if(Array.isArray(this.props.books)) {
                list = this.props.books.map((book) => {
                   return <AdminBookView key={book.name} book={book} removeFromInventory={this.props.removeFromInventory}/>
                })
            }
        return (
            <div>
                {list}
            </div>
        )

    }


}

export default AdminBookListing;