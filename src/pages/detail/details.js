import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieDetail } from '../../helper';
import { IMG_URL } from '../../helper/constant';
import AppLayout from '../../layout/appLayout';
import CastImageList from './imageList';

export default function MovieDetail() {
  const [detail, setDetail] = useState({});
  const { id } = useParams();
  useEffect(() => {
    getMovieDetail(id)
      .then((res) => {
        setDetail(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);
  if (!Object.keys(detail).length) {
    return <Typography>Details not available</Typography>;
  }
  const {
    vote_average, title, release_date, original_language,
    backdrop_path, overview, credits: { cast },
  } = detail;
  return (
    <AppLayout>
      <Grid container spacing={1}>
        <Grid item xs={12} md={8} sm={8}>
          <img src={`${IMG_URL}${backdrop_path}`} alt={title} />
        </Grid>
        <Grid item xs={12} md={4} sm={4}>
          <Typography>{`Title:- ${title}`}</Typography>
          <Typography>{`Release Date:- ${release_date}`}</Typography>
          <Typography>{`Rating:- ${vote_average}`}</Typography>
          <Typography>{`Language:- ${original_language}`}</Typography>
          <Typography>{`Overview:- ${overview}`}</Typography>
        </Grid>
      </Grid>
      <CastImageList castData={cast} />
    </AppLayout>
  );
}
