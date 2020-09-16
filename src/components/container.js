import React from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Listofmokrie from '../components/listofmokrie';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      marginTop : "2em"
    },
    paper: {
    backgroundColor : green[200]    
    },
    control: {
      padding: theme.spacing(3),
      height :"30em",
      marginLeft : "1em",
      marginRight : "1em"
    },
  }));
 
  
const Mycontainer = (props) => {
    const classes = useStyles();
   
    return (
        <Grid container className={classes.root}  spacing={2}>
            <Grid  className={classes.paper}  item  xs ={12} md={8} lg={8}>
            <Paper  className={classes.control} />
            </Grid>
            <Grid  className={classes.paper} item  xs ={12} md={4} lg={4}>
            <Listofmokrie data={props.data} />
           </Grid>
        </Grid>
    )
}

export default Mycontainer;