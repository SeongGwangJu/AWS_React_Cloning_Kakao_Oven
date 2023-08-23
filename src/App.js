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
import { Reset } from 'styled-reset';
import Header from './components/layouts/Header/Header';
import Footer from './components/layouts/Footer/Footer';
import MyProject from './pages/Projects/MyProject/MyProject';
import SharedProject from './pages/Projects/SharedProject/SharedProject';

function App() {
  return (
    <>
      <Reset />
      <Global styles={S.SCommon} />
      <Header />
      <MainLayout>
        <Routes>
          <Route path="/projects/my" element={ <MyProject/> } />
          <Route path="/projects/shared" element={ <SharedProject /> } />
          <Route path="/accountsetting" element={ <AccountSetting/>} />
          <Route path="/helpdesk" element={ <HelpDesk/>} />
        </Routes>
      </MainLayout>
      <Footer />
    </>
  );
}

export default App;
