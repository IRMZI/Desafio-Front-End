import './App.css';
import RoutesApp from './Routes';
import { AutProvider } from './Context/autenticador';
function App() {
  return (
      <AutProvider>
      <RoutesApp />
      </AutProvider>
    );
}

export default App;