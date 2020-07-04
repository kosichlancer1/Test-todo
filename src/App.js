import React from 'react';
import {ThemeProvider, createGlobalStyle} from 'styled-components';
import Main from './Pages/Main';

const theme = {
    accentColor: '#b36ca4',
    layoutColor: '#f5f5f5',
    dangerColor: '#e24b4b'
};

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    
    body {
       font-size: 16px;
       background: ${({ theme }) => theme.layoutColor};
       padding: 0;
       margin: 0;
       font-family: 'Roboto', sans-serif;
    }
`;

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles/>
                <Main/>
            </ThemeProvider>
        </>
    );
}

export default App;
