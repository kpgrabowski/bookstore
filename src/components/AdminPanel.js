import React from 'react';
import LoginForm from "./LoginForm";
import BookForm from "./BookForm";
import {fbase, firebaseApp} from "../fbase";
import AdminBookListing from "./AdminBookListing";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
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

    addNewBook = (book) => {
        this.setState({
            books: [...this.state.books, book],
        });
    };

    removeFromInventory = (title) => {
        this.setState({
            books: this.state.books.filter(book => title!==book.name)
        })
    };


    editBook = (oldBookTitle, bookAfterEdit) => {

        const newBooks = this.state.books.filter(book => oldBookTitle!==book.name);
        this.setState({
            books: [...newBooks, bookAfterEdit],
        });
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
                    <BookForm addNewBook = {this.addNewBook}
                              editBook = {this.editBook}
                    />
                    <AdminBookListing books = {this.state.books}
                                      removeFromInventory = {this.removeFromInventory}

                    />
                    <button className="LogOut" onClick = {this.logout}>LOGOUT</button>
                </div>

                }
            </div>

        )
    }
}

export default AdminPanel;

