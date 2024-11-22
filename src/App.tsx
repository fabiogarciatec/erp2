import React from 'react';
    import { Routes, Route } from 'react-router-dom';
    import Sidebar from './components/Sidebar';
    import Dashboard from './pages/Dashboard';
    import Cadastros from './pages/Cadastros';
    import Vendas from './pages/Vendas';
    import Marketing from './pages/Marketing';
    import Configuracoes from './pages/Configuracoes';

    const App: React.FC = () => {
      return (
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/cadastros" element={<Cadastros />} />
              <Route path="/vendas" element={<Vendas />} />
              <Route path="/marketing" element={<Marketing />} />
              <Route path="/configuracoes" element={<Configuracoes />} />
            </Routes>
          </div>
        </div>
      );
    };

    export default App;
