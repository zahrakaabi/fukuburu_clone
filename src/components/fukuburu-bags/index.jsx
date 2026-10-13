/* -------------------------------------------------------------------------- */
/*                                DEPENDENCIES                                */
/* -------------------------------------------------------------------------- */
// Packages
import { useEffect, useState } from "react";

// UI Local Components
import BagItem from "../bag-item";

// Utils
import { fetchBags } from "../../api/bags";
import { BOARD_HEIGHT, BOARD_WIDTH, getBagPosition } from "./layout";

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

  const [selectedId, setSelectedId] = useState(null);

  useEffect(() => {
    fetchBags()
      .then(setBags)
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading bags...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id));
  };

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
          selectedId={selectedId} 
          handleSelect={handleSelect}
        />)}
      </div>

      <p className="remaining" aria-live="polite">
        {bags.length} bags left
      </p>
    </div>
  )
};

export default FukuburuBags;