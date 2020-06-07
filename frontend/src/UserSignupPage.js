//Mutlaka import etmemiz gerekiyor.
import React from 'react';

class UserSignupPage extends React.Component {

    state = {

        username: null,
        //agreedClicked: false
        displayName: null,
        password: null,
        passwordRepeat: null
    }

    onChange = event => {
        
        const { name, value} =event.target;
        //const value = event.target.value;
        //const name = event.target.name;

        this.setState ({

            [name] : value
        })
    }
    
    /*onChangeUsername = event => {
        //console.log(event.target.value);
        //this.state.username = event.target.value;
        //console.log(this.state);

        this.setState ({
            username: event.target.value
        });
    };

    onChangeDisplayName = event => {
        this.setState ({
            displayName: event.target.value
        });
    };

    onChangePassword = event => {
        this.setState ({
            password: event.target.value
        });
    };

    onChangePasswordRepeat = event => {
        this.setState ({
            passwordRepeat: event.target.value
        });
    };
    */

    /*
    onChangeAgree = event => {

        //this.state.agreedClicked = event.target.checked;
        //console.log(this.State);
        this.setState({
            agreedClicked: event.target.checked
        });
    };
    */
    
    render() {
        return (
            <form>
                <h1>Sign Up</h1>
                <div>
                    <label>Username</label>
                    {/*<input name="username" onChange={this.onChangeUsername} >*/}
                    <input name="username" onChange={this.onChange} >
                    </input>
                </div>

                <div>
                    <label>Display Name</label>
                    {/*<input name="displayName" onChange={this.onChangeDisplayName}>*/}
                    <input name="displayName" onChange={this.onChange}>
                    </input>
                </div>

                <div>
                    <label>Password</label>
                    {/*<input name="password" type="password" onChange={this.onChangePassword}>*/}
                    <input name="password" type="password" onChange={this.onChange}>
                    </input>
                </div>

                <div>
                    <label>Password Repeat</label>
                    {/*<input name="passwordRepeat" type="password" onChange={this.onChangePasswordRepeat}>*/}
                    <input name="passwordRepeat" type="password" onChange={this.onChange}>
                    </input>
                </div>

                {/*<input type="checkbox" onChange={this.onChangeAgree} ></input> Agreed*/}
                {/*<button disabled={!this.state.agreedClicked}>Sign Up</button>*/}
                <button>Sign Up</button>
            </form>
            
        ); 
    }
}

export default UserSignupPage;