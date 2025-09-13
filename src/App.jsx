import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import AuthorProfilePage from './components/AuthorProfilePage';
import './App.css';


function App() {n
  return (
   
    <Router>
      
      <Routes>
        
        <Route path="/" element={<ArticlePage />} />

       
        <Route path="/author/:authorName" element={<AuthorProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;