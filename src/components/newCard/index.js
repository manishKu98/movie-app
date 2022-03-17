/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';

export default function CustomCard({
  type, id, title, imgUrl, overview,
}) {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
      >
        <CardMedia
          component="img"
          image={imgUrl}
          alt={title}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Link to={`${type}/${id}`}>
            <Typography gutterBottom paragraph component="h2">
              {title}
            </Typography>
          </Link>
          <Typography noWrap>
            {overview}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
