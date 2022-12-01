import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout';
import RutaProtegida from "./layout/RutaProtegida.jsx";
import AdministrarPacientes from "./paginas/AdministrarPacientes.jsx";
import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import Registrar from './paginas/Registrar'
import NuevoPassword from "./paginas/nuevoPassword.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";
import {PacientesProviders} from "./context/PacientesProviders.jsx";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <PacientesProviders>
          <Routes>
            <Route path='/' element={< AuthLayout />}>
              <Route index element={<Login />} />
              <Route path ="registrar" element={<Registrar />} />
              <Route path ="olvide-password" element={<OlvidePassword />} />
              <Route path ="olvide-password/:token" element={<NuevoPassword />} />
              <Route path ="confirmar/:id" element={<ConfirmarCuenta />} />
            </Route>

            {/*Rutas de administrador*/}
            <Route path= '/admin' element={<RutaProtegida />}>
              <Route index element={<AdministrarPacientes />} />
            </Route>
          </Routes>
        </PacientesProviders>
      </AuthProvider>

    </BrowserRouter>
  )
}

export default App
