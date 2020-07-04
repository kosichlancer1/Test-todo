import React from 'react';
import { Header } from '../Components'

const MainLayout = ({ children }) => {
    return (
        <>
            <Header/>
            {children}
        </>
    )
};

export default MainLayout;