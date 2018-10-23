import React from 'react';

export default class BookView extends React.Component {

    render() {
        return (
            <div className="bookView row">
                <div className="col-6">
                    <b>{this.props.book.name}</b><br/>
                    <i>{this.props.book.author}</i><br/>
                    <p>{this.props.book.description}</p>
                </div>
                <div className="col-6">
                    <button className="btn btn-primary" onClick={(event) =>this.props.addToOrder(this.props.book)}>
                        ADD TO ORDER
                    </button>
                </div>


            </div>
        )
    }
}