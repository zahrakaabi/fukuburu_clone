/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useState } from "react";

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                         ZOOMABLE CONTENT COMPONENT                         */
/* -------------------------------------------------------------------------- */
const MIN = 1, MAX = 3, STEP = 0.1;

function ZoomableContent({ children }) {
/* ---------------------------------- HOOKS --------------------------------- */
    const [zoom, setZoom] = useState(1);
    const clamp = (value) => Math.min(MAX, Math.max(MIN, value));

/* -------------------------------- RENDERING ------------------------------- */
    return (
        <>
            {/* CONTENT */}
            <div className="zoomable-content flex items-center justify-center w-screen h-screen overflow-hidden">
                <div style={{
                    transform: `scale(${zoom})`,
                    transformOrigin: 'center',
                    transition: 'transform 0.3s ease-in-out',
                }}>
                    {children}
                </div>
            </div>

            {/* ZOOM CONTROLS */}
            <div className="zoom-controls flex items-center">
                <button 
                    className="controls zoom-out"
                    type="button" 
                    aria-label="Zoom Out" 
                    title="Zoom Out" 
                    onClick={() => setZoom((prevZoom) => clamp(prevZoom - STEP))}
                >
                    -
                </button>
                <input
                    type="range"
                    min={MIN}
                    max={MAX}
                    step={STEP}
                    value={zoom}
                    onChange={(e) => setZoom(e.target.value)}
                />
                <button 
                    className="controls zoom-in"
                    type="button" 
                    aria-label="Zoom In" 
                    title="Zoom In" 
                    onClick={() => setZoom((prevZoom) => clamp(prevZoom + STEP))}
                >
                    +
                </button>
            </div>
        </>
    )
};

export default ZoomableContent;