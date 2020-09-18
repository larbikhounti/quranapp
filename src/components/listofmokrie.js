import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { green } from '@material-ui/core/colors';
import HearingIcon from '@material-ui/icons/Hearing';
import { Scrollbars } from 'react-custom-scrollbars';
import Skeleton from '@material-ui/lab/Skeleton';
import InputBase from '@material-ui/core/InputBase';




const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      maxWidth: 360,
      backgroundColor: theme.palette.background.paper,
    },
    playbutton:{
        color:green[900],  
        cursor : "pointer"

    },
    pinterlist : {
      cursor : "pointer",
      marginBottom : "5px"
    },
    roundedplay : {
        backgroundColor : green[100]
    },
    inputRoot : {
      width: "100%",
    height: "3em",
    borderBottom: '1px solid darkseagreen'
    },
    inputInput :{
      padding : "2em",
      color:green[700],
      fontWeight : 900,
      direction: 'rtl'
    }
  }));
 
const Listofmokrie = (props) => {
    const classes = useStyles();
  
   return (
        
        <List className={classes.root}>
              <InputBase 
              onChange={props.search}
              placeholder="إبحث..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
             <Scrollbars style={{ width: "100%", height :"29em" }}> 
             {
                
               props.data[0] === undefined? 
               <div>
                 <ListItem className = {classes.pinterlist} >
                    <ListItemAvatar>
                    <Avatar  className={classes.roundedplay} >
                    <Skeleton variant="circle" width={40} height={40} />
                    </Avatar>
                     </ListItemAvatar>
                     <Skeleton variant="text" width="100%" />
                    </ListItem>
                    
               </div>
               :
              props.data.map((element,i)=>{
                  return(
                   
                    <ListItem className = {classes.pinterlist}  key={props.data[i].number}>
                    <ListItemAvatar id={props.data[i].number} onClick={props.itemclicked.bind(this, i)}>
                    <Avatar id={props.data[i].number}  onClick={props.itemclicked.bind(this, i)} className={classes.roundedplay}  >
                    <HearingIcon className={classes.playbutton} id={props.data[i].number}  onClick={props.itemclicked.bind(this, i)} />
                    </Avatar>
                     </ListItemAvatar>
                     <ListItemText   primary={`${props.data[i].name}`} secondary={props.data[i].englishName}  />
                     <ListItemText   primary={props.data[i].numberOfAyahs} secondary={props.data[i].revelationType}  />
                    </ListItem>
                  )
              })
         
          }
        
        </Scrollbars>
      </List>
    )
}

export default Listofmokrie;