import React from 'react';

export default class BookView extends React.Component {

    render() {
        return (
            <div>
                <b>{this.props.book.name}</b><br/>
                <i>{this.props.book.author}</i><br/>
            </div>
        )
    }
}