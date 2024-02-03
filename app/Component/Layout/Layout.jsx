import React from 'react';
import Header from '../Header';

const Layout = ({children}) => {
    return (
        <div className=' bg-[#010101] text-white '>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;