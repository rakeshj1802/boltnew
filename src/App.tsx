import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import HomePage from './pages/HomePage';
import MovieDetailPage from './pages/MovieDetailPage';
import CategoryPage from './pages/CategoryPage';
import SearchResultsPage from './pages/SearchResultsPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router basename="/boltnew">
      <div className="flex flex-col min-h-screen bg-dark-800 text-gray-100">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movie/:id" element={<MovieDetailPage />} />
            <Route path="/category/:type" element={<CategoryPage />} />
            <Route path="/search" element={<SearchResultsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;