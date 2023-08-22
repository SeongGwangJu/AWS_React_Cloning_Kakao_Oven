import logo from './logo.svg';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Global } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import * as S from "./styles/common"
import './App.css';
import MainLayout from './components/layouts/MainLayout/MainLayout';
import AccountSetting from './pages/AccountSetting/AccountSetting';
import HelpDesk from './pages/HelpDesk/HelpDesk';
import Projects from './pages/Projects/Projects';
import { Reset } from 'styled-reset';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.SCommon} />
      <Header />
      <MainLayout>
        <Routes>
          <Route path="projects" element={ <Projects/> } />
          <Route path="accountsetting" element={ <AccountSetting/>} />
          <Route path="helpdesk" element={ <HelpDesk/>} />
          
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
