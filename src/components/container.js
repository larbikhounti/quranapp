import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Paper from '@material-ui/core/Paper';
import Listofmokrie from '../components/listofmokrie';
import ReactPlayer from 'react-player'
import { Highlight } from '@material-ui/icons';
const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      marginTop : "2em"
    },
    paper: {
    backgroundColor : green[200],  
    },
    control: {
      padding: theme.spacing(3),
      height :"30em",
      marginLeft : "1em",
      marginRight : "1em"
    },
    player : {
      width : "10em",
      height : "10em"
    }
  }));

 
  
 
const Mycontainer = (props) => {
  let [quranData,setQranData] = useState([])
  let [count,setCount] = useState(0)
  let [diditend,setDiditend] = useState(true)
  const onEnded = ()=>{
    if(count < quranData.length-1){
      console.log("ended")
      setCount(count+1)
      console.log(count)
    }else{
      setDiditend(true);
    }
   
    
  }
  const itemclicked = (i, event)=>{
    setCount(0)
    getSoraById(i+1)
  }
  const getSoraById = (number)=>{
    //get aya by id
    axios.get(`http://api.alquran.cloud/v1/surah/${number}/ar.alafasy`)
        .then( response =>{
           //console.log(response.data.data.ayahs)
           //quranData = response.data.data.ayahs
          setQranData(response.data.data.ayahs)
          // console.log(quranData.length)
        })
        .catch(function (error) {
          // handle error
         // console.log(error);
        })
  }
  

    const classes = useStyles();
   
    return (
        <Grid container className={classes.root}  spacing={2}>
            <Grid  className={classes.paper}  item  xs ={12} md={8} lg={8}>
            {
              
            quranData[0] === undefined  ? null : <ReactPlayer onEnded={onEnded} 
             className={classes.player} 
             url={ diditend? quranData[count].audio : null  } 
             playing ={true}  />
}

            
            </Grid>
            <Grid  className={classes.paper} item  xs ={12} md={4} lg={4}>
            <Listofmokrie data={props.data} itemclicked={itemclicked}/>
           </Grid>
        </Grid>
    )
}

export default Mycontainer;