import React, { Fragment } from 'react';
import Main from '../template/Main';
import Logo from '../template/Logo';
import Nav from '../template/Nav';
import Footer from '../template/Footer';
import '../../main/App.css';

export default props =>
    <div className='app'>
        <Logo />
        <Nav />
        <Main icon="home" title="Início"
            subtitle="Segundo projeto react">
            <div className='display-4'>Welcome!</div>
            <hr />
            <p className="mb-0">App to register personal information to show in personal public profile!</p>
        </Main>
        <Footer />
    </div>
