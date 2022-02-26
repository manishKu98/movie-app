/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import './card.css';

function Poster(props) {
  const {
    title, type, imgUrl, id, imageHeight = '14rem', imageWidth = '10rem', cardHeight = '16rem', cardWidth = '10rem',
  } = props;
  const navigate = useNavigate();
  return (
    <div onClick={() => { navigate(`${type}/${id}`); }} className="box" style={{ height: cardHeight, width: cardWidth }}>
      <img className="image-size" src={imgUrl} alt={title} style={{ height: imageHeight, width: imageWidth }} />
      <h6 className="movie-title">{title}</h6>
    </div>
  );
}

Poster.defaultProps = {
  imageHeight: '14rem',
  imageWidth: '10rem',
  cardHeight: '16rem',
  cardWidth: '10rem',
};

Poster.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageHeight: PropTypes.string,
  imageWidth: PropTypes.string,
  cardHeight: PropTypes.string,
  cardWidth: PropTypes.string,
};

export default Poster;
