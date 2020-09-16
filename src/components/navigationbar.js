import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { green } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    bar :{
            backgroundColor : green[600],
            display: "flex",
            flexDirection : "row",
            height : "4em",
            justifyContent : "center"
            
            
    },
    grow: {
        flexGrow: 1,
      },
      mystyle: {
        padding :"0.3em",
        fontSize :"2em"
      },
      logo : {
        
        padding :"0.5em"
      }
     
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();
 
  return (
    <div className={classes.grow}>
      <AppBar className = {classes.bar} position="static">

         <Typography  className ={classes.mystyle} variant="h6" noWrap>
         الْقُرْآن الْكَرِيْم  
          </Typography>
      </AppBar>
     
     
    </div>
  
  );
}
