import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import { green } from '@material-ui/core/colors';
import { Scrollbars } from 'react-custom-scrollbars';




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    playbutton:{
        color:green[900],  

    },
    roundedplay : {
        backgroundColor : green[100]
    }
  }));

const Listofmokrie = (props) => {
    
    const classes = useStyles();
  
   return (
        
        <List className={classes.root}>
             <Scrollbars style={{ width: "100%", height :"29em" }}> 
             {
              props.data.map((element,i)=>{
                  return(
                    <ListItem key={props.data[i].number}>
                    <ListItemAvatar>
                    <Avatar  className={classes.roundedplay} >
                    <PlayArrowIcon className={classes.playbutton} />
                    </Avatar>
                     </ListItemAvatar>
                     <ListItemText primary={`- ${props.data[i].name} - `} secondary={props.data[i].englishName}  />
                     <ListItemText primary={props.data[i].numberOfAyahs} secondary={props.data[i].revelationType}  />
                    </ListItem>
                  )
              })
         
          }
        
        </Scrollbars>
      </List>
    )
}

export default Listofmokrie;