import React from 'react';

export default class OrderView extends React.Component {

    render() {
        return (
            <div className="orderView row">
                <div className="col-8"><b>{this.props.book.name}</b><br/></div>
                <div className="col-4"><button className="btn btn-danger" onClick={(event) =>this.props.removeFromOrder(this.props.book.name)}>
                    REMOVE
                </button></div>
            </div>
        )
    }
}