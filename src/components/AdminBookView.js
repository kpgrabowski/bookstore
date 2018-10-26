import React from 'react';

class AdminBookView extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="orderView row">
                <div>
                    <span>{this.props.book.name} {this.props.book.author}</span>
                </div>
                <div>
                    <button className="btn btn-danger LogOut" onClick={(event) =>
                        this.props.removeFromInventory(this.props.book.name)}>Remove</button>
                </div>
            </div>
        )
    }
}


export default AdminBookView;