/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Utils
import { BAG_WIDTH, getBagPosition } from "../fukuburu-bags/layout";

// Images
import RED_BAG from "../../images/bags/red_bag.png";
import BLUE_BAG from "../../images/bags/blue_bag.png";
import YELLOW_BAG from "../../images/bags/yellow_bag.png";
import GREEN_BAG from "../../images/bags/green_bag.png";
import ORANGE_BAG from "../../images/bags/orange_bag.png";

// Styles
import "./index.css";

/* -------------------------------------------------------------------------- */
/*                             BAG ITEM COMPONENT                             */
/* -------------------------------------------------------------------------- */
function BagItem({ bag, isSelected, isAbducted, onClick }) {
/* --------------------------------- CONSTS --------------------------------- */
  const { id, color, size } = bag;
  const { x, y, zIndex } = getBagPosition(color, size);

  const BAG_IMAGES = {
    pink: RED_BAG,
    blue: BLUE_BAG,
    yellow: YELLOW_BAG,
    green: GREEN_BAG,
    orange: ORANGE_BAG
  };

/* -------------------------------- RENDERING ------------------------------- */
  return (
    <button
      key ={id}
      className={`bag-item 
        ${isSelected === id ? "bag-item selected" : "bag-item"}
        ${isAbducted ? "abducted" : ""}
      `}
      type="button"
      style={{
        width: `${BAG_WIDTH}px`,
        position: "absolute",
        left: `${x}px`,
        top: `${y}px`,
        zIndex
      }}
      aria-label={`Take ${color} bag, size ${size}`}
      aria-pressed={isSelected === id}
      onClick={onClick}
    >
        <img
        src={BAG_IMAGES[color]}
        alt={`${color} bag, size ${size}`}
        draggable={false}
        />
    </button>
  )
};

export default BagItem;