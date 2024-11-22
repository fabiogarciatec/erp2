import React from 'react';
    import { Link } from 'react-router-dom';

    const Sidebar: React.FC = () => {
      return (
        <div style={{ width: '250px', background: '#f0f0f0', padding: '20px' }}>
          <img src="/logo.png" alt="Logo" style={{ width: '100%', marginBottom: '20px' }} />
          <nav>
            <ul>
              <li><Link to="/">Dashboard</Link></li>
              <li><Link to="/cadastros">Cadastros</Link></li>
              <li><Link to="/vendas">Vendas</Link></li>
              <li><Link to="/marketing">Marketing</Link></li>
              <li><Link to="/configuracoes">Configurações</Link></li>
            </ul>
          </nav>
          <footer style={{ marginTop: 'auto', textAlign: 'center' }}>
            <img src="/user.jpg" alt="User" style={{ width: '50px', borderRadius: '50%' }} />
            <p>Email do Usuário</p>
            <button>Logout</button>
          </footer>
        </div>
      );
    };

    export default Sidebar;
