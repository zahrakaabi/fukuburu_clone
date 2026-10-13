/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useState } from "react";

// UI Local Components
import BagItem from "../bag-item";
import Spaceship from "../spaceship";

// Utils
import { fetchBags } from "../../api/bags";
import { BAG_HEIGHT, BOARD_HEIGHT, BOARD_WIDTH, getBagPosition } from "./layout";
import { useAbduction } from "../../hooks";

// Images
import BOARD from "../../images/base_suppor.svg";

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

  const { start, phase, selectedId } = useAbduction({
    onComplete: (id) => setBags((prev) => prev.filter((bag) => bag.id !== id))
  });

  useEffect(() => {
    fetchBags()
      .then(setBags)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading bags...</p>;
  if (error) return <p>Error: {error}</p>;

  const selectedBag = bags.find((bag) => bag.id === selectedId);
  const target = selectedBag 
    ? getBagPosition(selectedBag.color, selectedBag.size)
    : null;

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

        {bags.map((bag) => <BagItem 
          key={bag.id} 
          bag={bag}
          isAbducted={selectedId === bag.id && (phase === "beaming" || phase === "leaving")}
          onClick={() => start(bag.id)}
        />)}

      <Spaceship
        target={target}
        phase={phase}
        bagHeight={BAG_HEIGHT}
      />
      </div>

      <p className="remaining" aria-live="polite">
        {bags.length} bags left
      </p>
    </div>
  )
};

export default FukuburuBags;