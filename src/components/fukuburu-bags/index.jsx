/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useState } from "react";

// Utils
import { fetchBags } from "../../api/bags";
import { BAG_WIDTH, BOARD_HEIGHT, BOARD_WIDTH, getBagPosition, TILE_W } from "./layout";

// Images
import BOARD from "../../images/base_suppor.svg";
import RED_BAG from "../../images/bags/red_bag.png";
import BLUE_BAG from "../../images/bags/blue_bag.png";
import YELLOW_BAG from "../../images/bags/yellow_bag.png";
import GREEN_BAG from "../../images/bags/green_bag.png";
import ORANGE_BAG from "../../images/bags/orange_bag.png";

// Styles
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                           FUKUBURU BAGS COMPONENT                          */
/* -------------------------------------------------------------------------- */
function FukuburuBags() {
/* ---------------------------------- HOOKS --------------------------------- */
  const [bags, setBags] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchBags()
      .then(setBags)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading bags...</p>;
  if (error) return <p>Error: {error}</p>;

  const BAG_IMAGES = {
    pink: RED_BAG,
    blue: BLUE_BAG,
    yellow: YELLOW_BAG,
    green: GREEN_BAG,
    orange: ORANGE_BAG
  };

/* -------------------------------- RENDRING -------------------------------- */
  return (
    <div>
      <div className="bags-board" style={{ width: BOARD_WIDTH, height: BOARD_HEIGHT }}>
        <img
          className="board"
          src={BOARD}
          alt="Bags board"
          draggable={false}
        />

        {bags.map((bag) => {
          const { x, y, zIndex } = getBagPosition(bag.color, bag.size);
          const { id, color, size } = bag;

          return (
            <button
              key ={id}
              className="bag-item"
              type="button"
              style={{
                width: `${BAG_WIDTH}px`,
                position: "absolute",
                left: `${x}px`,
                top: `${y}px`,
                zIndex
              }}
              aria-label={`Take ${color} bag, size ${size}`}
            >
              <img
                src={BAG_IMAGES[color]}
                alt={`${color} bag, size ${size}`}
                draggable={false}
              />
            </button>
          )
        })}
      </div>

      <p className="remaining" aria-live="polite">
        {bags.length} bags left
      </p>
    </div>
  )
};

export default FukuburuBags;



// /* ---------------------------------- HOOKS --------------------------------- */
//   const [takenIds, setTakenIds] = useState(new Set());

//   const takeBag = useCallback((id) => {
//     setTakenIds((prev) => new Set(prev).add(id));
//   }, []);

//   const remaining = BAGS.length - takenIds.size;

// /* -------------------------------- RENDERING ------------------------------- */
//   return (
//     <div style={{ width: "100vw", maxWidth: 800, margin: "0 auto" }}>
//       <div style={{ position: "relative", aspectRatio: `${BOARD.w} / ${BOARD.h}` }}>
//         <img
//           src={BOARD.src}
//           alt="Bags board"
//           draggable={false}
//           style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
//         />
//         {BAGS.map((bag) => (
//           <BagItem
//             key={bag.id}
//             bag={bag}
//             taken={takenIds.has(bag.id)}
//             onSelect={takeBag}
//           />
//         ))}
//       </div>
//       <p className="remaining" aria-live="polite">{remaining} bags left</p>
//     </div>
//   );
// };

// export default FukuburuBags;

// /* -------------------------------------------------------------------------- */
// /*                             BAG ITEM COMPONENT                             */
// /* -------------------------------------------------------------------------- */
// const BagItem = memo(function BagItem({ bag, taken, onSelect }) {
// /* -------------------------------- RENDERING ------------------------------- */
//   return (
//     <button
//       type="button"
//       onClick={() => onSelect(bag.id)}
//       disabled={taken}
//       aria-label={`Take ${bag.color} bag, size ${bag.size}`}
//       tabIndex={taken ? -1 : 0}
//       style={{
//         position: "absolute",
//         left: `${(bag.x / BOARD.w) * 100}%`,
//         top: `${(bag.y / BOARD.h) * 100}%`,
//         width: `${(BAG_W / BOARD.w) * 100}%`,
//         transform: "translate(-50%, -100%)",
//         zIndex: Math.round(bag.y), // lower on screen = in front
//         padding: 0,
//         border: "none",
//         background: "none",
//         opacity: taken ? 0 : 1,
//         pointerEvents: taken ? "none" : "auto",
//         transition: "opacity .4s ease",
//         cursor: "pointer",
//       }}
//     >
//       <img
//         src={bag.image}
//         alt=""
//         draggable={false}
//         style={{ display: "block", width: "100%" }}
//       />
//     </button>
//   );
// });