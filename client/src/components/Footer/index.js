import * as React from 'react';
import './index.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import Mark from '../../assets/mark.jpg'
import Jessica from '../../assets/jessica.jpg'
import Jane from '../../assets/jane.jpg'
import Josh from '../../assets/josh.jpg'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const itemData = [
    {
      img: Mark,
      title: 'Mark',
      link: 'https://github.com/mjgiannelli'
    },
    {
      img: Jessica,
      title: 'Jessica',
      link: 'https://github.com/JSheleg',
    },
    {
      img: Jane,
      title: 'Jane',
      link: 'https://github.com/janekv20',
    },
    {
      img: Josh,
      title: 'Josh',
      link: 'https://github.com/Joshsands',
    },
  ];

const Footer = () => {
    return (

<Box sx={{ flexGrow: 2}}>

        <Grid container spacing={0} direction="row" justifyContent="center" alignItems="flex-end" pt="10vw">
        {/* <Grid item xs key='leftSpacer'></Grid> */}
        <Grid item xs={12}>
        <h3>CONTACT THE DEV TEAM!</h3>
        </Grid>
      {itemData.map((item) => (
        <Grid item xs={6} sm={1} md={1} key={item.img} sx={{ ml: 2, mr: 2 }}>
          <Link href={`${item.link}`}>
            <img
            src={item.img}
            srcSet={item.img}
            alt={item.title}
            loading="lazy"
            width="100vw"
            height="100vw"
          /></Link>
        </Grid>
      ))}
    {/* <Grid item xs key='rightSpacer'></Grid> */}
    </Grid>
      </Box>
    )
        }
export default Footer;