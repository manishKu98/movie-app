import './aside.css';
import { useEffect, useState } from 'react';
import { getTvShows } from '../../helper';
import Poster from '../card';
import { IMG_URL } from '../../helper/constant';

function Aside() {
  const [tvShow, setTvShow] = useState([]);
  console.log(tvShow);
  const [page, setPage] = useState(1);

  console.log(tvShow);
  useEffect(() => {
    getTvShows(page)
      .then((data) => {
        setTvShow(data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [page]);

  function prev() {
    setPage((pre) => {
      if (pre <= 1) {
        return pre;
      }
      return pre - 1;
    });
  }
  function next() {
    setPage((pre) => pre + 1);
  }
  return (
    <>
      <div className="aside">
        <h2 className="heading">Watch Everywhere</h2>
        <p className="para">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
      </div>
      <div className="card-container">
        {
            tvShow.map((d) => {
              const { poster_path, name, id } = d;
              return <Poster imageHeight="6.5rem" imageWidth="6rem" cardHeight="8.5rem" cardWidth="6rem" type="tv" imgUrl={`${IMG_URL}${poster_path}`} title={name} id={id} />;
            })
        }
        <div className="btns">
          <button type="button" className="prev btn" onClick={prev}>Prev</button>
          <button type="button" className="next btn" onClick={next}>Next</button>
        </div>
      </div>
    </>
  );
}
export default Aside;
