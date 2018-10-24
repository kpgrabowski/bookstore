import React from 'react';
import LoginForm from "./LoginForm";
import BookForm from "./BookForm";
import {fbase, firebaseApp} from "../fbase";
import AdminBookListing from "./AdminBookListing";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            loggedIn: false,
        };
    };

    componentDidMount() {
        this.ref = fbase.syncState('bookstore/books', {
            context: this,
            state: 'books'
        });
    }

    componentWillUnmount() {
        fbase.removeBinding(this.ref);
    }

    changeLoggedIn =(newValue) => this.setState({
        loggedIn: newValue
    });

    logout = () => {
        firebaseApp.auth().signOut()
    };

    addNewBook = (book) => this.setState({books: [...this.state.books, book]});

    removeFromOrder = (title) => {
        this.setState({
            order: this.state.order.filter(book => title!==book.name)
        })
    };


    render() {

        return (

            <div className="container">
                {!this.state.loggedIn &&
                    <LoginForm
                        changeLoggedIn={this.changeLoggedIn}
                    />
                }
                {this.state.loggedIn &&

                <div>
                    <BookForm addNewBook={this.addNewBook} />
                    <AdminBookListing books={this.state.books} removeFromOrder={this.props.removeFromOrder} />
                    <button className="LogOut" onClick={this.logout}>LOGOUT</button>
                </div>

                }
            </div>

        )
    }
}

export default AdminPanel;

