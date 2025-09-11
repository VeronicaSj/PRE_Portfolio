import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';

import MainPage from './components/mainPage/MainPage';
import NavHeader from './components/navigation/NavHeader';
import NavFooter from './components/navigation/NavFooter';

function App() {
  return (
    <main >
        <NavHeader></NavHeader>
        <main style={{ paddingTop: "80px" }}> 
            <MainPage></MainPage>
        </main>
        <NavFooter></NavFooter>
    </main>
  );
}

export default App;
