import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component {
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            username: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event){
        event.preventDefault();
        console.log("form submitted", this.state);
        axios.post("http://localhost:9000/auth/signup", this.state).then(resp => {
            console.log("signup response: ", resp);
        }).catch( err => {
            console.log('error response: ', err.message);
        });
    }

    render(){
        const {email, username, password } = this.state; 

        return (
            <div>
                <h1>Sign Up</h1>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        Email: 
                        <input value={email} name="email" onChange={this.handleChange} type="text"/>
                    </div>
                    <div>
                        UserName: 
                        <input value={username}  name="username" onChange={this.handleChange} type="text"/>
                    </div>
                    <div>
                        Password: 
                        <input value={password}  name="password" onChange={this.handleChange} type="text"/>
                    </div>
                    <button>Create Account</button>
                </form>
            </div>
        );
    }
}

export default SignUp;