/* ----------------------------------------- */
/*              DEPENDENCIES                 */
/* ----------------------------------------- */
// Packages

// Images
import { BAGS } from '../../_mocks';

// Utils
import BAGS_SUPPORT from '../../images/base_suppor.svg';

// Styles
import './index.css';

/* -------------------------------------------------------------------------- */
/*                             FUKUBURU COMPONENT                             */
/* -------------------------------------------------------------------------- */
const ROW_COUNT = 4;
const ROW_OFFSET = 3; // in rem

function FukuburuBags() {
/* -------------------------------- RENDERING ------------------------------- */
  return (
    <div className="container bags-wrapper">
      <img className="support" src={BAGS_SUPPORT} alt="support" />
      <div className="bags" style={{ "--row-count": ROW_COUNT }}>
        {Array.from({ length: ROW_COUNT }, (_, i) => (
          <BagRow 
            key={i} 
            index={i}
            bags={BAGS} 
          />
        ))}
      </div>
    </div>
  );
}

export default FukuburuBags;

/* -------------------------------------------------------------------------- */
/*                              BAG ROW COMPONENT                             */
/* -------------------------------------------------------------------------- */
function BagRow({ bags, index }) {
/* -------------------------------- RENDRING -------------------------------- */
  return (
    <div 
      className="bags-container flex"
      style={{ marginLeft: `${index * ROW_OFFSET}rem` }}
    >
      {bags.map(({ id, image }) => (
        <img className="bag" key={id} src={image} alt="bag" />
      ))}
    </div>
  );
};