/* ----------------------------------------- */
/*              DEPENDENCIES                 */
/* ----------------------------------------- */
// Packages

// UI Local Componenets
import { FukuburuBags, ZoomableContent } from './components';

// Styles
import './shared/styles/global.css';

/* ----------------------------------------- */
/*                     APP                   */
/* ----------------------------------------- */
function App() {
  /* ************* RENDERING *************** */
  return (
    <div className="full-height flex justify-center items-center">
      <ZoomableContent>
        <FukuburuBags />
      </ZoomableContent>
    </div>
  );
}

export default App;
