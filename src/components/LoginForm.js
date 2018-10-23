import React from 'react';
import {firebaseApp} from "../fbase";

class LoginForm extends React.Component {

    constructor() {
        super();
        this.state = {
            email: "",
            password: ""
        }

    }

    handleLoginChange = (event) => {

        this.setState({
            [event.target.name]: event.target.value
        })

    };

    authenticate = (event) => {
        event.preventDefault();
        firebaseApp.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.changeLoggedIn(true);
            })
            .catch(() => {
                console.log("Ups....");
            })
    };

    render() {
        return (
            <div>
                <form onSubmit={this.authenticate} className="formLoggiIn">
                    <input type="text" placeholder="email" id="email_bs" name="email" className="form-control"
                           onChange={this.handleLoginChange} value={this.state.email}/>
                    <input type="password" placeholder="password" id="password_bs" name="password"
                           className="form-control"
                           onChange={this.handleLoginChange} value={this.state.password}/>
                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        )

    }


}

export default LoginForm;