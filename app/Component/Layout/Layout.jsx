import React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({children}) => {
    return (
        <div className=' bg-[#010101] text-white max-w-[1920px] mx-auto'>
            <Header/>
            {children}
            <Footer/>
        </div>
    );
};

export default Layout;