import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Listofmokrie from '../components/listofmokrie';
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography';
import FadeIn from 'react-fade-in';

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
     
      height : "100px"
    },
    ayatsText : {
      backgroundColor :"white",
      color : green[600],
      textAlign: "center",
      fontSize : "3em",
      marginTop: "3em",
      width : "100%"
    }
  }));

 
  
 
const Mycontainer = (props) => {
  let [quranData,setQranData] = useState([])
  let [count,setCount] = useState(0)

  const onEnded = ()=>{
    if(count < quranData.length-1){
      console.log("ended")
      setCount(count+1)
      console.log(count)
     // console.log(quranData[count].text)
    }
    
  }
  const onPlay = ()=>{
    if(count <= quranData.length-1){
     
      console.log(quranData[count].text)
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
              
            quranData[0] === undefined  ? null :<div> <ReactPlayer height ="2em" width ="100%" controls={true} onPlay={onPlay} onEnded={onEnded} 
             className={classes.player} 
             url={ quranData[count].audio  } 
             playing ={true}  />
             
             <Typography className ={classes.ayatsText}>
               <FadeIn>
               {quranData[count].text}
               </FadeIn>
             </Typography>
             

            </div>
            }
            </Grid>
            <Grid  className={classes.paper} item  xs ={12} md={4} lg={4}>
            <Listofmokrie data={props.data} itemclicked={itemclicked}/>
           </Grid>
        </Grid>
    )
}

export default Mycontainer;