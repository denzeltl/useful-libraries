import React from 'react';
import Header from '../components/header';
import Nav from '../components/nav';
import Main from '../components/main';
import SEO from '../components/seo';
import '../styles/styles.scss';

const IndexPage = () => (
    <>
        <SEO title="Home" />
        <Header />
        <div className="wrapper wrapper-flex">
            <Nav />
            <Main />
        </div>
    </>
);

export default IndexPage;
