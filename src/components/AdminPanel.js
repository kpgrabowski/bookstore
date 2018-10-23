import React from 'react';
import LoginForm from "./LoginForm";
import BookForm from "./BookForm";
import {firebaseApp} from "../fbase";

class AdminPanel extends React.Component {

    constructor() {
        super();
        this.state = {
            loggedIn: false,
        };
    };



    changeLoggedIn =(newValue) => this.setState({
        loggedIn: newValue
    });

    logout = () => {
        firebaseApp.auth().signOut()
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
                    <BookForm/>
                    <button className="LogOut" onClick={this.logout}>LOGOUT</button>
                </div>

                }
            </div>

        )
    }
}

export default AdminPanel;

