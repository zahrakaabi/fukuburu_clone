/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { memo, useCallback, useState } from "react";

// Images
import BAGS_BOARD from "../../images/base_suppor.svg";
import RED_BAG from "../../images/bags/red_bag.png";
import BLUE_BAG from "../../images/bags/blue_bag.png";
import YELLOW_BAG from "../../images/bags/yellow_bag.png";
import GREEN_BAG from "../../images/bags/green_bag.png";
import ORANGE_BAG from "../../images/bags/orange_bag.png";

// Styles
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                                   CONFIG                                   */
/* -------------------------------------------------------------------------- */
export const BOARD = { w: 1000, h: 630, src: BAGS_BOARD };

const SIZE_CONFIG = [
  { size: "XS", color: "pink", image: RED_BAG },
  { size: "S", color: "blue", image: BLUE_BAG },
  { size: "M", color: "yellow", image: YELLOW_BAG },
  { size: "L", color: "green", image: GREEN_BAG },
  { size: "XL", color: "orange", image: ORANGE_BAG },
];

export const ROWS = 5;
const BAG_W = 80; // bag width in px

const ORIGIN = { x: 490, y: 540 };
const ROW_STEP = { x: 92, y: -50 }; // front → back
const COL_STEP = { x: -90, y: -50 }; // XS → XL

/* -------------------------------------------------------------------------- */
/*                                   HELPERS                                  */
/* -------------------------------------------------------------------------- */
export const getBagPosition = (col, row) => ({
  x: ORIGIN.x + col * COL_STEP.x + row * ROW_STEP.x,
  y: ORIGIN.y + col * COL_STEP.y + row * ROW_STEP.y, // y = bag's foot
});

export const createBags = () =>
  SIZE_CONFIG.flatMap(({ size, color, image }, col) =>
    Array.from({ length: ROWS }, (_, row) => ({
      id: `${size.toLowerCase()}-${row}`,
      size,
      color,
      image,
      col,
      row,
      ...getBagPosition(col, row),
    }))
  );

export const BAGS = createBags();

/* -------------------------------------------------------------------------- */
/*                             BAG ITEM COMPONENT                             */
/* -------------------------------------------------------------------------- */
const BagItem = memo(function BagItem({ bag, taken, onSelect }) {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <button
      type="button"
      onClick={() => onSelect(bag.id)}
      disabled={taken}
      aria-label={`Take ${bag.color} bag, size ${bag.size}`}
      tabIndex={taken ? -1 : 0}
      style={{
        position: "absolute",
        left: `${(bag.x / BOARD.w) * 100}%`,
        top: `${(bag.y / BOARD.h) * 100}%`,
        width: `${(BAG_W / BOARD.w) * 100}%`,
        transform: "translate(-50%, -100%)",
        zIndex: Math.round(bag.y), // lower on screen = in front
        padding: 0,
        border: "none",
        background: "none",
        opacity: taken ? 0 : 1,
        pointerEvents: taken ? "none" : "auto",
        transition: "opacity .4s ease",
        cursor: "pointer",
      }}
    >
      <img
        src={bag.image}
        alt=""
        draggable={false}
        style={{ display: "block", width: "100%" }}
      />
    </button>
  );
});

/* -------------------------------------------------------------------------- */
/*                           FUKUBURU BAGS COMPONENT                          */
/* -------------------------------------------------------------------------- */
function FukuburuBags() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [takenIds, setTakenIds] = useState(new Set());

  const takeBag = useCallback((id) => {
    setTakenIds((prev) => new Set(prev).add(id));
  }, []);

  const remaining = BAGS.length - takenIds.size;

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div style={{ width: "100vw", maxWidth: 800, margin: "0 auto" }}>
      <div
        style={{ position: "relative", aspectRatio: `${BOARD.w} / ${BOARD.h}` }}
      >
        <img
          src={BOARD.src}
          alt="Bags board"
          draggable={false}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        />
        {BAGS.map((bag) => (
          <BagItem
            key={bag.id}
            bag={bag}
            taken={takenIds.has(bag.id)}
            onSelect={takeBag}
          />
        ))}
      </div>
      <p className="remaining" aria-live="polite">{remaining} bags left</p>
    </div>
  );
};

export default FukuburuBags;