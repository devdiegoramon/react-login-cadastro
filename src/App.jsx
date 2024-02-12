// frontend/src/App.jsx
import React, { useState } from 'react';
import LoginPage from './pages/LoginPage';
import CadastroPage from './pages/CadastroPage';
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      {currentPage === 'login' && <LoginPage />}
      {currentPage === 'cadastro' && <CadastroPage />}
      
      {/* Botões de navegação */}
      
      {currentPage === 'login' && (
        <label onClick={() => handlePageChange('cadastro')}>
        Ir para Cadastro
      </label>
      )}

      {currentPage === 'cadastro' && (
        <label onClick={() => handlePageChange('login')}>
          Voltar para Login
        </label>
      )}
    </div>
  );
}

export default App;
