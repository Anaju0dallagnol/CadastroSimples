// src/Router.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FormPageFunction from "./CadastroUsuarios";



export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CadastroUsuarios />} />
        <Route path="/usuarios" element={<ListaUsuarios />} />
      </Routes>
    </BrowserRouter>
  );
}
