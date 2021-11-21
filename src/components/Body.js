import React from 'react';
import '../App.css';
import { Typography, AppBar,
         Card, CardActions, CardContent, 
         CardMedia, CssBaseline, Grid, 
         Toolbar, Container,
        Switch,FormControlLabel
        
      
       } from '@material-ui/core';

import { PhotoCamera, MenuBookTwoTone } from '@material-ui/icons';
import { withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import {Button} from '@material-ui/core';
import axios from 'axios';
import useStyles from '../styles';



const PIXABAY_URL = process.env.REACT_APP_SERVER_URL

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
  const [pix, setPix] = React.useState([])
  const [search, setSearch] = React.useState('')
  React.useEffect(() => {
    axios.get(PIXABAY_URL)
    .then(res => {
      setPix(res.data.hits)
      console.log(res.data.hits);
    })
  },[])



  const classes = useStyles()
  const handleModeChange = () => {
    settoggleDark(!toggleDark);

    
    };

  const handleSearch = e => {
      setSearch(e.target.value)
    }

  const pixFinder = pix.filter(pixs => 
      pixs.user.toLowerCase().includes(search.toLowerCase()) ||
      pixs.tags.toLowerCase().includes(search.toLowerCase())
    )
  return (
   <>
   <div className={classes.root}>
   <AppBar position='relative' id='appbar'>
     <Toolbar id="toolbar">
      <PhotoCamera className={classes.icon}/>
      <Typography variant='h6'>Photo Album</Typography>

     </Toolbar>
   </AppBar>    
   <div className="coin-search" align='center'>
        <h1 className="coin-text">Search Your Favorite</h1>
        <form>
          <input type="text" placeholder="Search" className="coin-input" onChange={handleSearch} />
        </form>
      </div>
      <div className={classes.change}>


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
{pixFinder.map((card) => (
    <Grid item key={card.id} xs={12} sm={6} md={4}>
     
      <Card className={classes.card} id="card">
        <CardMedia 
            className={classes.cardMedia}
            // image="https://source.unsplash.com/random/"
            image={card.largeImageURL}
            title="Image title"
        />
        <CardContent classes={classes.cardContent} >
        <Typography gutterBottom variant="h5">
        <div>User:</div> {card.user}
        </Typography>
        <Typography>
            <div>Decription:</div>
          {card.tags.charAt(0).toUpperCase() + card.tags.slice(1)}.
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
