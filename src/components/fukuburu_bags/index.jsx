/* ----------------------------------------- */
/*              DEPENDENCIES                 */
/* ----------------------------------------- */
// Packages

// Images
import BAGS_SUPPORT from '../../images/base_suppor.svg';

// BAGS APIs
import { BAGS_API } from '../../shared/utils/bagsAPI';

// Styles
import './index.css';

/* ----------------------------------------- */
/*                FUKUBURU                   */
/* ----------------------------------------- */
function FukuburuBags() {
  /* --------------- GET BAGS -------------- */ 
  function GetBags() {
    var allBags = [];
    const GET_BAGS = BAGS_API?.map((bag) => <img className="bag" key={bag.id} src={bag.image} alt="bag" />)
    for (var i = 0; i < 4; i++) {
      allBags.push(
        <div className="bags-container flex" key={i}>
          {GET_BAGS}
        </div>
      );
    }
    return allBags;
  }

  /* ************* RENDERING *************** */
  return (
    <div className="container bags_wrapper">
        <img className="support" src={BAGS_SUPPORT} alt="support" />
        <div className="bags">
          {GetBags()}
        </div>
    </div>
  );
}

export default FukuburuBags;