import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({children}) => {
    return (
        <div className='  text-white  mx-auto'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;