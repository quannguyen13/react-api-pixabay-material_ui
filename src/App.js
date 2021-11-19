import React from 'react';
import './App.css';
import { Typography, AppBar,
         Card, CardActions, CardContent, 
         CardMedia, CssBaseline, Grid, 
         Toolbar, Container } from '@material-ui/core';

import { PhotoCamera } from '@material-ui/icons';

import {Button} from '@material-ui/core';
import {ButtonGroup} from '@material-ui/core';
import useStyles from './styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function App() {
  const classes = useStyles()

  return (
   <>
   <CssBaseline/>
   <AppBar position='relative'>
     <Toolbar>
      <PhotoCamera className={classes.icon}/>
      <Typography variant='h6'>Photo Album</Typography>
     </Toolbar>
   </AppBar>
   <main>
<div className={classes.container}>
  <Container maxWidth="sm" align='center'>
    <Typography variant='h2' align='center' color='textPrimary' gutterBottom>Photo Album</Typography>
    <Typography variant='h5' align='center' color="textSecondary" paragraph>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi dolorum repellendus iure fugit porro amet eveniet et hic at, beatae
    </Typography>
    <div className={classes.button}>
      <Grid container spacing={2} justify='center'>
        <Grid item>
          <Button variant="contained" color='primary'>see my photos</Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color='secondary'>secondary action</Button>
        </Grid>
      </Grid>
    </div>

  </Container>
</div>
<Container className={classes.cardGrid} maxWidth="md">
<Grid container spacing={4}>
{cards.map((card) => (
    <Grid item key={card} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia 
            className={classes.cardMedia}
            image="https://source.unsplash.com/random/"
            title="Image title"
        />
        <CardContent classes={classes.cardContent}>
        <Typography gutterBottom variant="h5">
          Heading
        </Typography>
        <Typography>
          this media card. can be used thi section to describe the content.
        </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">View</Button>
          <Button size="small" color="secondary">Edit</Button>
        </CardActions>
      </Card>
    </Grid>
))}
</Grid>
</Container>

   </main>
   <footer className={classes.footer}>
    <Typography variant='h6' align='center' gutterBottom>Footer</Typography>
    <Typography variant='subtitle1' align='center' gutterBottom color={'secondary'}>
      Something here to get the footer more perfect
    </Typography>
   </footer>
   </>
  
    
  );
}

export default App;
