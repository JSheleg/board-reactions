import * as React from 'react';
import './index.css';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const itemData = [
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Breakfast',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Burger',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Camera',
    },
    {
      img: 'https://st.depositphotos.com/2101611/3925/v/600/depositphotos_39258143-stock-illustration-businessman-avatar-profile-picture.jpg',
      title: 'Coffee',
    },
  ];

//   export default function BasicGrid() {
//     return (

//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={4}>
//             <Item>xs=4</Item>
//           </Grid>
//           <Grid item xs={8}>
//             <Item>xs=8</Item>
//           </Grid>

//     );
//   }

const Footer = () => {
    return (
<div>

<Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={0} direction="row" justifyContent="space-around" alignItems="flex-end" pt="40vw">
        {/* <Grid item xs key='leftSpacer'></Grid> */}

      {itemData.map((item) => (
        <Grid item xs={1} key={item.img}>
          <img
            src={`${item.img}`}
            srcSet={`${item.img}`}
            alt={item.title}
            loading="lazy"
            width="60px"
            height="80px"
          />
        </Grid>
      ))}
    {/* <Grid item xs key='rightSpacer'></Grid> */}
    </Grid>
      </Box>
</div>
    )
        }
export default Footer;