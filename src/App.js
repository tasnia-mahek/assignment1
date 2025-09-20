import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import AuthorProfilePage from './components/AuthorProfilePage';
import './App.css';

function App() {
  return (
   
    <Router>
     
      <Routes>
        {/* Section = Article Page */}
        <Route path="/section" element={<ArticlePage />} />

        {/* Sub-section = Profile Page */}
        <Route path="/section/subsection/:authorName" element={<AuthorProfilePage />} />

       
        <Route path="/" element={<ArticlePage />} />

        
        <Route path="/author/:authorName" element={<AuthorProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;