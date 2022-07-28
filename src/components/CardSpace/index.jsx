import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const CardSpace = ({ space }) => (
  <div className="main-container">
    <Link className="space-link" to="/SpaceDetail" key={space.id}>
      <main className="mainSection mainSection--queri-bgscreen">
        <div className="mainSection__card  mainSection__card--queri-bgscreen">
          <div>
            <img className="card__image-container" src={space.img} alt="space" />
          </div>
          <div className="card__location"><b>{space.location}</b></div>
          <div className="card__distance">{space.distance}</div>
          <div className="card__dates">{space.dates}</div>
          <div className="card__price"><b>{space.price}</b> / night</div>
        </div>
      </main>
    </Link>
  </div>
);

CardSpace.propTypes = {
  space: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
    }),
  ).isRequired,
};

export default CardSpace;