import React from 'react';
import '../App.css';
import { Typography, AppBar,
         Card, CardActions, CardContent, 
         CardMedia, CssBaseline, Grid, 
         Toolbar, Container,
        Switch,FormControlLabel 
        
       } from '@material-ui/core';

import { PhotoCamera } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import {Button} from '@material-ui/core';

import useStyles from '../styles';
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Custom Switch color CASE #2
const PurpleSwitch = withStyles({
  switchBase: {
    color: purple[300],
    '&$checked': {
      color: purple[500],
    },
    '&$checked + $track': {
      backgroundColor: purple[500],
    },
  },
  checked: {},
  track: {},
})(Switch);
// 



// Trigger toggle using onChange Switch

function Body({toggleDark, settoggleDark}) {
  const classes = useStyles()
  const handleModeChange = () => {
    settoggleDark(!toggleDark);
    localStorage.setItem('darkMode', toggleDark === true);
    
    };
  return (
   <>
   <div className={classes.root}>
   <AppBar position='relative'>
     <Toolbar>
      <PhotoCamera className={classes.icon}/>
      <Typography variant='h6'>Photo Album</Typography>
     </Toolbar>
   </AppBar>
      <div className={classes.change}>
        {/* Swith CASE#1 */}
      {/* <Switch
            color='secondary'
            checked={toggleDark}
            onChange={handleModeChange}
            name="toggleDark"
          /> */}


        {/* Swith CASE#2 */}

        <FormControlLabel
            control={
              <PurpleSwitch
            
            checked={toggleDark}
            onChange={handleModeChange}
             
            />
          }
            label="Dark Mode"
            labelPlacement="bottom"
            
            
      />
 
    </div>
   <main>
<div className={classes.container}>
  <Container maxWidth="sm" align='center'>
    <Typography variant='h2' align='center' gutterBottom>Photo Album</Typography>
    <Typography variant='h5' align='center' paragraph>

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
     
      <Card className={classes.card} id="card">
        <CardMedia 
            className={classes.cardMedia}
            image="https://source.unsplash.com/random/"
            title="Image title"
        />
        <CardContent classes={classes.cardContent} >
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
   </div>
   </>
  
    
  );
}

export default Body;
