/* ----------------------------------------- */
/*              DEPENDENCIES                 */
/* ----------------------------------------- */
// Packages

// UI Local Componenets
import { FukuburuBags } from './components';

// Styles
import './shared/styles/global.css';

/* ----------------------------------------- */
/*                     APP                   */
/* ----------------------------------------- */
function App() {
  /* ************* RENDERING *************** */
  return (
    <div className="full-height flex justify-center items-center">
      <FukuburuBags />
    </div>
  );
}

export default App;
