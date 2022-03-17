import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CustomCard from '../../components/newCard';
import { IMG_URL } from '../../helper/constant';
import getMovies from '../../helper';
import AppLayout from '../../layout/appLayout';

export default function Album() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [search] = useSearchParams();

  useEffect(() => {
    getMovies(page)
      .then((res) => {
        setData(res.results);
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
  const paramsTitle = search.get('title') || '';
  return (
    <AppLayout>
      <Grid container spacing={4}>
        {
                data
                  .filter((d) => d.title.toLowerCase().includes(paramsTitle?.toLowerCase()))
                  .map((arg) => {
                    const {
                      title, poster_path, id, overview,
                    } = arg;
                    return <CustomCard type="movie" overview={overview} key={id} id={id} title={title} imgUrl={`${IMG_URL}${poster_path}`} />;
                  })
            }
      </Grid>
      <Box component="div" sx={{ p: 2, 'text-align': 'center' }}>
        <Button onClick={() => prev()}>Prev</Button>
        <Button onClick={() => next()}>Next</Button>
      </Box>
    </AppLayout>
  );
}
