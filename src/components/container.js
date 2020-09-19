import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Listofmokrie from '../components/listofmokrie';
import ReactPlayer from 'react-player'
import Typography from '@material-ui/core/Typography';
import { useMediaQuery } from 'react-responsive'
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const axios = require('axios');

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      
      marginTop : "2em"
    },
    choosemokrea :{
      backgroundColor :"white",
      color : green[600],
      textAlign: "center",
      fontSize : "1em",
      marginTop: "1em",
      width : "100%",
      fontWeight : "bolder",
      borderBottom : "1px solid #A5D6A7"

      
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
      marginTop: "1em",
      width : "100%",
      height : "100%",

    },
    ontabletorphone :{
      backgroundColor :"white",
      color : green[600],
      
      marginTop: "1em",
      
      width : "100%",
      textAlign: "center",
    },
    fontsize : {
      fontSize: "medium",
    }
  }));

 
  
 
const Mycontainer = (props) => {
  let [quranData,setQranData] = useState([])
  let [count,setCount] = useState(0)
  const [anchorEl, setAnchorEl] = useState(null);
  let [mokrie,setMokrie] = useState("ar.alafasy")

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    
  };

  const handleClose = (event) => {
    console.log(event.target.getAttribute("id"))
    if(event.target.getAttribute("id") !== null){
      setMokrie(setMokrie = event.target.getAttribute("id") )
      setAnchorEl(null);
    }
    

    
    
  };

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
    getSoraById(event.target.getAttribute('id'))
    console.log(event.target.getAttribute('id'))
  }
  const getSoraById = (number)=>{
    //get aya by id
    axios.get(`https://api.alquran.cloud/v1/surah/${number}/${mokrie}`)
        .then( response =>{
           console.log(response.data.data.ayahs)
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
    const isTabletOrMobile = useMediaQuery({ maxWidth: 1224 })
    return (
        <Grid container className={classes.root}  spacing={2}>
            <Grid  className={classes.paper}  item  xs ={12} md={8} lg={8}>
            {
              
            quranData[0] === undefined  ? null :<div> <ReactPlayer height ="2em" width ="100%" controls={true} onPlay={onPlay} onEnded={onEnded} 
             className={classes.player} 
             url={ quranData[count].audio  } 
             playing ={true}  />

             {
               isTabletOrMobile === true?<Typography className ={classes.ayatsText}>
              
               {quranData[count].text}
               
             </Typography>: <Typography className ={classes.ontabletorphone}>
              
               {quranData[count].text}
               
             </Typography>
             }
               </div>
            }
            </Grid>
            <Grid  className={classes.paper} item  xs ={12} md={4} lg={4}>
            <Button className={classes.choosemokrea}  aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
           اضغط هنا لتغيير المقرأ
           </Button>
          <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {
         props.edition[0] !== "empty"? props.edition.map((element,i)=>{
          return <MenuItem key={i} id={element.identifier} onClick={handleClose}>{element.name}</MenuItem>
          }):<MenuItem  onClick={handleClose}>empty</MenuItem>
        }
        
       
      </Menu>

            <Listofmokrie data={props.data}  itemclicked={itemclicked} search ={props.search}/>
           </Grid>
        </Grid>
    )
}

export default Mycontainer;