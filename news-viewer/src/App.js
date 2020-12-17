import './App.css';
import { useCallback, useState } from 'react';
import { Route } from 'react-router-dom';
import NewsPage from './pages/NewsPage';

function App() {
  //?가 들어가면 값이 선택적
  return <Route path="/:category?" component={NewsPage} />;
}

export default App;
