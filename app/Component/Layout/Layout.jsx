import React from 'react';
import Header from '../Header';

const Layout = ({children}) => {
    return (
        <div className=' bg-[#010101] text-white max-w-[1920px] mx-auto'>
            <Header/>
            {children}
        </div>
    );
};

export default Layout;