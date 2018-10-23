import React from 'react';
import {fbase} from '../fbase';
import LoginForm from "./LoginForm";
import BookForm from "./BookForm";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            books: [],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: true,
                image: ""
            },
            loggedIn: false,

        };
    };



    handleChange = (event) => {

        let newBook;

        if (event.target.name === "onStock") {
            newBook = {
                ...this.state.book,
                [event.target.name]: !event.target.checked
            };
        } else {
            newBook = {
                ...this.state.book,
                [event.target.name]: event.target.value
            };
        }

        this.setState({
            book: newBook
        });

        console.log(this.state.book);
    };

    addNewBook = (event) => {



        let newBook = {...this.state.book};

        // this.props.addBook(newBook);

        this.setState({
            books: [...this.state.books, newBook],
            book: {
                name: "",
                author: "",
                description: "",
                onStock: false,
                image: ""
            }
        });
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



    changeLoggedIn =(newValue) => this.setState({loggedIn: newValue});


    render() {

        return (

            <div className="container">
                {!this.state.loggedIn &&
                    <LoginForm
                        changeLoggedIn={this.props.changeLoggedIn}
                    />
                }
                {this.state.loggedIn &&
                    <BookForm
                        addNewBook={this.props.addNewBook}
                        handleChange={this.props.handleChange}
                    />
                }
            </div>


            // <div className= "container">
            //     {!this.state.loggedIn &&
            //     <form onSubmit={this.authenticate} className= "formLoggiIn">
            //         <input type="text" placeholder="email" id="email_bs" name="email" className="form-control"
            //                onChange={this.handleLoginChange} value={this.state.email}/>
            //         <input type="password" placeholder="password" id="password_bs" name="password" className="form-control"
            //                onChange={this.handleLoginChange} value={this.state.password}/>
            //         <button type="submit" className="btn btn-primary">Log in</button>
            //     </form>
            //     }
            //     {this.state.loggedIn &&
            //     <div className="adminPanel col-xs-4">
            //         <form onSubmit={this.addNewBook}>
            //             <div className="form-group">
            //                 <input type="text" placeholder="Book name" id="name" name="name" className="form-control"
            //                        onChange={this.handleChange} value={this.state.book.name} />
            //             </div>
            //             <div className="form-group">
            //                 <input type="text" placeholder="Book author" id="author" name="author" className="form-control"
            //                        onChange={this.handleChange} value={this.state.book.author} />
            //             </div>
            //             <div className="form-group">
            //                 <textarea placeholder="Book description" id="description" name="description" className="form-control"
            //                           onChange={this.handleChange} value={this.state.book.description} />
            //             </div>
            //             <div className="form-group" style={{marginLeft: "20px"}}>
            //                 <input type="checkbox" id="onStock" name="onStock" className="form-check-input"
            //                        onChange={this.handleChange} value={this.state.book.onStock} />
            //                 <label htmlFor="onStock" className="form-check-label">On stock</label>
            //             </div>
            //             <div className="form-group">
            //                 <input type="text" placeholder="Book image" id="image" name="image" className="form-control"
            //                        onChange={this.handleChange} value={this.state.book.image} />
            //             </div>
            //             <button type="submit" className="btn btn-primary">Add</button>
            //         </form>
            //     </div>
            //     }
            // </div>
        )
    }
}

export default AdminPanel;