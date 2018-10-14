import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <button className="btn btn-danger" onClick={(event) =>this.props.removeFromOrder(this.props.book.name)}>
                    REMOVE
                </button>
            </div>
        )
    }
}