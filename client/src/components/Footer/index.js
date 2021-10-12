import * as React from 'react';
import './index.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const itemData = [
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Mark',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Jessica',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Jane',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Josh',
    },
  ];

const Footer = () => {
    return (
<div>

<Box sx={{ flexGrow: 1}}>
        <Grid container spacing={0} direction="row" justifyContent="space-around" alignItems="flex-end" pt="40vw">
        {/* <Grid item xs key='leftSpacer'></Grid> */}

      {itemData.map((item) => (
        <Grid item xs={1} key={item.img}>
          <Link href="www.google.com"><img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            width="60px"
            height="80px"
          /></Link>
        </Grid>
      ))}
    {/* <Grid item xs key='rightSpacer'></Grid> */}
    </Grid>
      </Box>
</div>
    )
        }
export default Footer;