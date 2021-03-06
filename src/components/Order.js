import React from 'react';
import OrderView from './OrderView';

class Order extends React.Component {





    render() {

        const orderBooks = this.props.order.map(order => {
            return <OrderView book={order} removeFromOrder={this.props.removeFromOrder} key={order.id}/>
        });
        return (<div className="order col-6">
                <h2> Your order: </h2>
                {orderBooks}
            </div>
        );
    }

}

export default Order;