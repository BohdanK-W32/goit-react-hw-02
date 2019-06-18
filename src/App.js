import React from 'react';
import Reader from './components/Reader/Reader';
import MoviePage from './components/MoviePage/MoviePage';
import Dashboard from './components/BankAccount/Dashboard/Dashboard';
import movies from './mock/movies.json';
import publications from './mock/publications.json';

const App = () => (
  <div>
    <Reader items={publications} />
    <MoviePage items={movies} />
    <Dashboard />
  </div>
);

export default App;
