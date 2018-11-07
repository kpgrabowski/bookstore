import React from 'react';

class AdminBookView extends React.Component {

    constructor() {
        super();
    }


    render() {
        return (
            <div className="orderView row">
                <div className="col-xs-8">
                    <span>{this.props.book.name} {this.props.book.author}</span>
                </div>
                <div className="row" style={{paddingLeft: "900px"}}>
                    <div className="col-xs-2">
                        <button className="btn btn-danger LogOut" onClick={(event) =>
                            this.props.removeFromInventory(this.props.book.name)}>
                            Remove
                        </button>
                    </div>
                    <div className="col-xs-2">
                        <button className="btn btn-primary" onClick={(event) =>
                            this.props.sendBookToEdit(this.props.book)}>
                            Edit
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}


export default AdminBookView;
