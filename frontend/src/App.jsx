import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AuthLayout from './layout/AuthLayout'
import Login from './paginas/Login'
import ConfirmarCuenta from './paginas/ConfirmarCuenta'
import OlvidePassword from './paginas/OlvidePassword'
import Registrar from './paginas/Registrar'
import NuevoPassword from "./paginas/nuevoPassword.jsx";
import {AuthProvider} from "./context/AuthProvider.jsx";

function App() {

  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path='/' element={< AuthLayout />}>
            <Route index element={<Login />} />
            <Route path ="registrar" element={<Registrar />} />
            <Route path ="olvide-password" element={<OlvidePassword />} />
            <Route path ="olvide-password/:token" element={<NuevoPassword />} />
            <Route path ="confirmar/:id" element={<ConfirmarCuenta />} />
          </Route>
        </Routes>

      </AuthProvider>

    </BrowserRouter>
  )
}

export default App
