import {Cards , Charts , Countrypicker , TitleComponent} from './components/index'
import {fetchdata} from './components/api/index'
import { Component } from 'react';
import styles from './App.module.css'


class App extends Component {
  
  state = {
    data : {},
    chosedcountry : ""
  }

  async componentDidMount(){

    let  fetched = await fetchdata(this.state.chosedcountry);
    
    this.setState({data : fetched})


  }

   onchangecountry = async (selected) =>{

    let  fetched = await fetchdata(this.state.chosedcountry);

    this.setState({
      chosedcountry : selected,
      data : fetched,
    });

    // console.log(this.state.chosedcountry);

    
    
    // this.setState({data : fetched})
    
    // console.log(this.state.data);
  }

  render (){
    return(

    
    <div className={styles.container}>
      
      <TitleComponent  title={this.state.chosedcountry}/>
      <Cards  data={this.state.data}/>
      <Countrypicker  onchangecountry={this.onchangecountry}/>
      <Charts  country={this.state.chosedcountry}  alldata={this.state.data}/>

    </div>

    )
  };
}

export default App;
