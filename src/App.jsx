import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ArticlePage from './components/ArticlePage';
import AuthorProfilePage from './components/AuthorProfilePage';
import './App.css';

// WHAT: This is the main component of our application.
// WHY: We use it as the entry point to set up our routing.
function App() {n
  return (
    // The <Router> component enables all the routing functionality.
    <Router>
      {/* The <Routes> component looks at the current URL and decides which <Route> to render. */}
      <Routes>
        {/*
          Route 1:
          path="/" means this is the homepage.
          element={<ArticlePage />} tells React to render our ArticlePage component when the URL is "/".
        */}
        <Route path="/" element={<ArticlePage />} />

        {/*
          Route 2:
          path="/author/:authorName" is a dynamic route. The ":" means that "authorName" is a parameter.
          If you go to "/author/John%20Doe", the AuthorProfilePage will be rendered, and the `useParams` hook inside it will get { authorName: "John Doe" }.
        */}
        <Route path="/author/:authorName" element={<AuthorProfilePage />} />
      </Routes>
    </Router>
  );
}

export default App;