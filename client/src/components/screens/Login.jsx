import React, { Component } from 'react';
import { ApolloConsumer } from 'react-apollo';

import { AUTH_LOGIN } from '../resources/queries/userQuery';
import logo from '../../assets/img/logo.png';
import './Login.css';

/*
*  In this page I used ApolloConsumer because I want to fire my query after user click on button
*
*
*/
class Login extends Component {
    state = {
        email: '',
        password: '',
        remember: false,
        error: ''
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value, error: '' });
    }

    async onLogin(token) {
        if (token) {
            //TODO: Put the name of token in a security place
            await localStorage.setItem('access_token', token);
            //On successfull we redirect to admin page
            this.props.history.replace('/admin');
        }
    }

    render() {
        return (
            <ApolloConsumer>
                {client => (
                    <div className="container py-5">
                        <div className="row">
                            <div className="col-md-12">

                                <div className="row">
                                    <div className="col-md-6 mx-auto">

                                        <div className="card rounded-0">
                                            <div className="card-header d-flex justify-content-center align-items-center">
                                                <img src={logo} alt="logo" className="text-center" />
                                            </div>
                                            <div className="card-header d-flex justify-content-center align-items-center">
                                                <h3 className="mb-0">Please Sign in</h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="form">
                                                    <div className="form-group">
                                                        <label>Email</label>
                                                        <input type="text" className="form-control form-control-lg rounded-0" name="email" required=""
                                                            onChange={e => this.onChange(e)}
                                                        />
                                                        <div className="invalid-feedback">Oops, you missed this one.</div>
                                                    </div>
                                                    <div className="form-group">
                                                        <label>Password</label>
                                                        <input type="password" className="form-control form-control-lg rounded-0" name="password" required="" autoComplete="new-password"
                                                            onChange={e => this.onChange(e)}
                                                        />
                                                        <div className="invalid-feedback">Enter your password too!</div>
                                                    </div>
                                                    <div>
                                                        <label>
                                                            <input type="checkbox" value="remember-me" /> Remember me on this computer
                                                        </label>
                                                    </div>
                                                    <button className="btn btn-success btn-lg float-right" id="btnLogin"
                                                        onClick={() => client.query({
                                                            query: AUTH_LOGIN,
                                                            variables: {
                                                                email: this.state.email,
                                                                password: this.state.password
                                                            }
                                                        })
                                                            .then(({ data }) => {
                                                                let { login: { token } } = data;
                                                                this.onLogin(token);
                                                            })
                                                            .catch(({ graphQLErrors }) => {
                                                                this.setState({ error: graphQLErrors[0].message });
                                                            })

                                                        }
                                                    >Login</button>
                                                </div>
                                            </div>
                                        </div>

                                    </div>


                                </div>

                            </div>
                        </div>
                    </div>
                )}
            </ApolloConsumer>
        )

    }
}

export default Login;