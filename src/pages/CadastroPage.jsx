import React, { useState } from 'react';
import '../components/Cadastro.css';

const CadastroPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log(`Usuário: ${username}, Email:${email}, Senha: ${password}`);
  };

  return (
    <div className="login-container">
      <h1>Cadastro</h1>
      <form className="login-form">
        <label>
          Usuário: 
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        </label>
        <label>
          Email: 
          <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Senha: 
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="button" onClick={handleLogin}>
          Cadastrar
        </button>
       
      </form>
    </div>
  );
};

export default CadastroPage;
