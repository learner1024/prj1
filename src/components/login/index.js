import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: ''
        }
        this.OnUsernameChange = this.OnUsernameChange.bind(this);
        this.Authenticate = this.Authenticate.bind(this);

    }

    OnUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    Authenticate(){
        console.log('authenticate clicked')
    }

    render() {
        return (
            <div>
                <input type='text' value={this.state.username} onChange={this.OnUsernameChange} />
                <input type='password' />
                <button type='button' onClick={this.Authenticate}>Login</button>
            </div>
        );;
    }
}

export default Login;