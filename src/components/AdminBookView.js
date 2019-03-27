import React from 'react';
import {connect} from "react-redux";

class BookView extends React.Component {

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

const mapStateToProps = (state) => {
    return {}
};
const mapDispatchToProps = (dispatch) => {
    return{
        sendBookToEdit: (book) => dispatch({
            type: 'SEND_BOOK_TO_EDIT',
            payload: book
        })
    }
};

const AdminBookView = connect(mapStateToProps, mapDispatchToProps)(BookView);

export default AdminBookView;
