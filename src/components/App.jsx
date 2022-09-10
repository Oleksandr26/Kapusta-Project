import 'modern-normalize/modern-normalize.css';
// import { Routes, Route } from 'react-router-dom';
import Header from 'components/Header/Header';
import HomePage from 'pages/HomePage/HomePage';
import ReportsPage from 'pages/ReportsPage/ReportsPage';
import Dashboard from './Dashboard/Dashboard';

export const App = () => {
  return (
    <div>
      <h2>Kapu$ta smart finance</h2>
      <Header />
      <HomePage />
      <ReportsPage />
      <Dashboard />
    </div>
  );
};
