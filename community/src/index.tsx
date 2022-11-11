import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/User/SignUp';
import LogIn from './pages/User/LogIn';
import GameView from './pages/GameView';
import Profile from './pages/User/Profile';
import RecuritList from './pages/Recruit/RecruitList';
import RecuritCreate from './pages/Recruit/RecruitCreate';
import RecuritEdit from './pages/Recruit/RecruitEdit';
import RecuritDetail from './pages/Recruit/RecruitDetail';
import NoticeList from './pages/Notice/NoticeList';
import NoticeCreate from './pages/Notice/NoticeCreate';
import NoticeEdit from './pages/Notice/NoticeEdit';
import NoticeDetail from './pages/Notice/NoticeDetail';
import InfoList from './pages/Info/InfoList';
import InfoCreate from './pages/Info/InfoCreate';
import InfoEdit from './pages/Info/InfoEdit';
import InfoDetail from './pages/Info/InfoDetail';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/login" element={<LogIn />}></Route>
          <Route path="/game/:gameId" element={<GameView />}></Route>
          <Route path="/profile/:userId" element={<Profile />}></Route>
          <Route path="/recruit" element={<RecuritList />}></Route>
          <Route path="/recruit/create" element={<RecuritCreate />}></Route>
          <Route path="/recruit/:articeId/edit/" element={<RecuritEdit />}></Route>
          <Route path="/recruit/:articleId" element={<RecuritDetail />}></Route>
          <Route path="/notice" element={<NoticeList />}></Route>
          <Route path="/notice/create" element={<NoticeCreate />}></Route>
          <Route path="/notice/:articeId/edit/" element={<NoticeEdit />}></Route>
          <Route path="/notice/:articleId" element={<NoticeDetail />}></Route>
          <Route path="/info" element={<InfoList />}></Route>
          <Route path="/info/create" element={<InfoCreate />}></Route>
          <Route path="/info/:articeId/edit/" element={<InfoEdit />}></Route>
          <Route path="/info/:articleId" element={<InfoDetail />}></Route>
        </Routes> 
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
