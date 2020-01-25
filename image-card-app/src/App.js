//import React,{useState} from 'react';
import React, { Component } from 'react';
import axios from 'axios';
import $ from 'jquery';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state ={images:[]};
  }

  componentDidMount(){
    axios.get('https://picsum.photos/v2/list')
    .then(response=>{
     const imgArr=response.data.map(image=><li key={image.id}><img className="width-class" src={image.download_url} alt="images api"></img></li>);
     this.setState({images:imgArr});
      console.log('Images Api Called Successfully');
    })
    .catch(err=>console.log('Error '+err));
  }

  render(){
    return(
      <>
      <h3>Images Card App</h3>
      
      <div>
        
        <ul className="cards">
       {this.state.images}
        </ul>
        
      </div>
      </>
    )
  }

}
export default App;

$(window).scroll(function(){
  if($(window).scrollTop()=== $(document).height()-$(window).height()){
    AddMoreImages();
    
  }
});

function AddMoreImages(){
  $.get('https://picsum.photos/v2/list').then(response=>response.data.map(image=><li key={image.id}><img className="width-class" src={image.download_url} alt="images api"></img></li>))
  .catch(err=>console.log(err));
}
