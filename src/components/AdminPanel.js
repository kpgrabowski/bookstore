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
            editMode: false,
            bookToEdit: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
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
            editMode: false,
            bookToEdit: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
        });
    };

    removeFromInventory = (title) => {
        this.setState({
            books: this.state.books.filter(book => title!==book.name)
        })
    };

    sendBookToEdit = (bookToEdit) => {

            this.setState({
              editMode: true,
                bookToEdit: bookToEdit
            });
        console.log(this.state.editMode);
        };

    editBook = (oldBookTitle, bookAfterEdit) => {

        const newBooks = this.state.books.filter(book => oldBookTitle!==book.name);
        this.setState({
            books: [...newBooks, bookAfterEdit],
            editMode: false,
            bookToEdit: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: "",
            },
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
                              editMode = {this.state.editMode}
                              book = {this.state.bookToEdit}
                              editBook = {this.editBook}
                    />
                    <AdminBookListing books = {this.state.books}
                                      removeFromInventory = {this.removeFromInventory}
                                      sendBookToEdit = {this.sendBookToEdit}
                    />
                    <button className="LogOut" onClick = {this.logout}>LOGOUT</button>
                </div>

                }
            </div>

        )
    }
}

export default AdminPanel;

