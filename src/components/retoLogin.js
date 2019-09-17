import firebase from 'firebase';
import React, { Component } from 'react';
import './loginFirebase.css';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"

class App extends Component {
    state = { isSignedIn: false }
    state2 = { isSignedIn2: false }
    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    constructor() {
        super();
        this.state = {
            user: null
        };

        this.handleAuth = this.handleAuth.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.renderLoginButton = this.renderLoginButton.bind(this);
    }



    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {

            this.setState({ isSignedIn: !!user })
            console.log("user", user)
            /*console.log({
                user: user.displayName,
                correo: user.email,
            })*/
        })
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user
            });
        })
    }

    handleAuth() {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }
    correo() {
        var userEmail = document.getElementById("email_field").value;
        var userPass = document.getElementById("password_field").value;
        firebase.auth().signInWithEmailAndPassword(userEmail, userPass)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    face() {
        const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(facebookAuthProvider)
            .then(result => console.log(`${result.user.email} ha iniciado sesion`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    handleLogout() {
        firebase.auth().signOut()
            .then(result => console.log(`${result.user.email} ha salido`))
            .catch(error => console.log(`Error ${error.code}: ${error.message}`));
    }

    renderLoginButton() {
        if (this.state.isSignedIn) {
            return (
                <div className="App">
                    {this.state2.isSignedIn2 ? (
                        <span>
                            <h1>Bienvenido</h1>
                            <button onClick={this.handleLogout} className="btn-l2"> log Auth </button>
                            <br></br>
                        </span>
                    ) : (
                            <div>
                                {this.state2.isSignedIn2 = true}
                                <StyledFirebaseAuth
                                    uiConfig={this.uiConfig}
                                    firebaseAuth={firebase.auth()}

                                />
                                <br></br>
                            </div>

                        )}
                </div>
            );
        } else {
            return (
                <div className="login_r">
                    <title className="email-3">Log In with Email</title>
                    <br></br>
                    <input type="email" placeholder="Correo..." id="email_field" className="email-1" />
                    <br></br>
                    <br></br>
                    <input type="password" placeholder="Password..." id="password_field" className="email-2" />
                    <br></br>
                    <br></br>
                    <button onClick={this.correo} className="btn-l1">Log In</button>
                    <br></br>
                    <br></br>
                    <br></br>
                    <button onClick={this.handleAuth} className="btn-l"> Google</button>
                    &nbsp;
                    <button onClick={this.face} className="btn-l2"> Facebook</button>
                </div>
            );
        }
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1> Reto_login </h1>
                </div>
                <p className="App-intro">
                    {this.renderLoginButton()}
                </p>
            </div>
        );
    }
}

export default App; //exportamos la clase para poder importarla en el index.js








