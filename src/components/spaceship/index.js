/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Images
import SPACESHIP from "../../images/spaceship.png";

// Styles
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                             SPACESHIP COMPONENT                            */
/* -------------------------------------------------------------------------- */
function Spaceship({ target, phase, bagHeight, gap = 40 }) {
/* --------------------------------- CONSTS --------------------------------- */
    const away = phase === "idle" || phase === "leaving";
    const top = target && !away ? target.y - bagHeight - gap : -400;

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <div className="spaceship"
            style={{
                left: target ? target.x : 0,
                top,
                opacity: phase === "idle" ? 0 : 1
            }}
        >
            <img src={SPACESHIP} alt="spaceship" title="spaceship" aria-label="spaceship" />
            {phase === "beaming" && (
                <div className="beam" style={{ height: bagHeight + gap }} />
            )}
        </div>
    )
};

export default Spaceship;