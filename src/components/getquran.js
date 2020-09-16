import React,{Component}  from 'react'
import Mycontainer from "../components/container"
const axios = require('axios');
class Getquran extends Component{
    constructor(){
        super()
    }
    componentDidMount(){
        axios.get('http://api.alquran.cloud/v1/surah')
        .then(response => console.log(response.data))
   
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        
    }
     demo = {
        number: 1,
        name: "سُورَةُ ٱلْفَاتِحَةِ",
        englishName: "Al-Faatiha",
        englishNameTranslation: "The Opening",
        numberOfAyahs: 7,
        revelationType: "Meccan"
      }
    render(){
        return(
            <Mycontainer data={this.demo}/>
        )
    }
}
export default Getquran;