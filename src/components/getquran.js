import React,{Component}  from 'react'
import Mycontainer from "../components/container"
const axios = require('axios');
class Getquran extends Component{
    constructor(){
        super()
        this.state = {
            ayat : [],
            searching: "",
            

        }
    }
    
     componentDidMount(){
       axios.get('https://api.alquran.cloud/v1/surah')
        .then( response =>{
           
               this.setState({ayat : response.data.data})
           // console.log(this.state.ayat)
        })
        .catch(function (error) {
          // handle error
         // console.log(error);
        })
    }
    search  = (event)=>{
     this.setState({searching : event.target.value} )
     
    }
    render(){
      
     

        const ayat = this.state.ayat;
       // console.log(ayat)
        if(ayat === []){
            return <h1>loading..</h1>
        }else{
      let filteredayat =  this.state.ayat.filter(
          aya=>  aya.name.toLowerCase().includes(this.state.searching.toLowerCase()))
          
           return (<Mycontainer data={filteredayat}  search={this.search} />)
           
        
        }
       
    }
}
export default Getquran;