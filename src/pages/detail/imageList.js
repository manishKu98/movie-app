/* eslint-disable react/prop-types */
import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import { IMG_URL } from '../../helper/constant';

export default function CastImageList({ castData }) {
  console.log(castData);
  return (
    <ImageList>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Casts</ListSubheader>
      </ImageListItem>
      {castData.map((item) => {
        if (!item.profile_path) {
          return null;
        }
        return (
          <ImageListItem key={item.profile_path}>
            <img
              src={`${IMG_URL}${item.profile_path}?w=248&fit=crop&auto=format`}
              srcSet={`${IMG_URL}${item.profile_path}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.name}
              loading="lazy"
            />
            <ImageListItemBar
              title={item.name}
              actionIcon={(
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  aria-label={`info about ${item.name}`}
                />
            )}
            />
          </ImageListItem>
        );
      })}
    </ImageList>
  );
}
