import React from 'react';
import logo from '../../assets/img/logo.png';
import './Login.css';

export default props => (
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
                                <form className="form" role="form" autoComplete="off" id="formLogin" noValidate="" method="POST">
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control form-control-lg rounded-0" name="uname1" id="uname1" required="" />
                                        <div className="invalid-feedback">Oops, you missed this one.</div>
                                    </div>
                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control form-control-lg rounded-0" id="pwd1" required="" autoComplete="new-password" />
                                        <div className="invalid-feedback">Enter your password too!</div>
                                    </div>
                                    <div>
                                        <label>
                                            <input type="checkbox" value="remember-me" /> Remember me on this computer
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-success btn-lg float-right" id="btnLogin">Login</button>
                                </form>
                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </div>
    </div>
);